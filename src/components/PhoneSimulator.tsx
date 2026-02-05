import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { useState, useMemo } from 'react'
import styles from './PhoneSimulator.module.css'
import * as THREE from 'three'

// Componente para cargar el modelo 3D del iPhone
const IPhoneModel = ({ caseColor }: { caseColor: string }) => {
  const { scene: phoneScene } = useGLTF('/Modelo-3D/iphone_13_concept.glb')
  const { scene: caseScene } = useGLTF('/Modelo-3D/Funda-iPhone-13.glb')
  
  // Clonar y colorear la funda
  const coloredCase = useMemo(() => {
    const cloned = caseScene.clone()
    cloned.traverse((child: any) => {
      if (child.isMesh) {
        child.material = child.material.clone()
        child.material.color = new THREE.Color(caseColor)
        child.material.metalness = 0.3
        child.material.roughness = 0.4
        child.material.needsUpdate = true
      }
    })
    return cloned
  }, [caseScene, caseColor])
  
  console.log('Phone scene:', phoneScene)
  console.log('Case scene:', caseScene)
  
  return (
    <group>
      <primitive object={phoneScene} scale={0.015} position={[0, -4, 0]} />
      {/* Funda escalada al 475%, alineada y rotada 180º */}
      <primitive object={coloredCase} scale={4.75} position={[0.018, 0.59, 0.16]} rotation={[0, Math.PI, 0]} />
    </group>
  )
}

// Modelo temporal de teléfono (placeholder para otros modelos)
const PhoneMesh = ({ caseColor, phoneModel }: { caseColor: string, phoneModel: string }) => {
  // Ajustar tamaño según el modelo
  const sizes: { [key: string]: [number, number, number] } = {
    'iphone_15': [2, 4.2, 0.2],
    'iphone_14': [2, 4.1, 0.2],
    'iphone_13': [2, 4.0, 0.2],
    'iphone_12': [2, 3.9, 0.2],
    'iphone_11': [2, 4.0, 0.2],
    'iphone_16': [2, 4.3, 0.2],
    'iphone_se_2022': [1.8, 3.5, 0.2],
    'galaxy_s24': [2.1, 4.3, 0.2],
    'galaxy_s23': [2.0, 4.2, 0.2],
    'galaxy_s22': [2.0, 4.1, 0.2],
    'xiaomi_14': [2, 4, 0.2],
    'redmi_note_13': [2.1, 4.2, 0.2],
  }
  
  const [width, height, depth] = sizes[phoneModel] || [2, 4, 0.2]
  
  return (
    <group>
      {/* Cuerpo del teléfono */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Pantalla */}
      <mesh position={[0, 0, 0.11]}>
        <boxGeometry args={[width - 0.2, height - 0.2, 0.01]} />
        <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Funda (se superpone) */}
      <mesh position={[0, 0, -0.11]} scale={1.02}>
        <boxGeometry args={[width + 0.1, height + 0.1, 0.25]} />
        <meshStandardMaterial 
          color={caseColor} 
          transparent 
          opacity={0.8}
          metalness={0.3} 
          roughness={0.4} 
        />
      </mesh>
    </group>
  )
}

const PhoneSimulator = ({ phoneId }: { phoneId: string }) => {
  const [selectedCase, setSelectedCase] = useState('#ff6b6b')
  const [selectedCaseType, setSelectedCaseType] = useState('silicona')
  
  const caseTypes = [
    { id: 'silicona', name: 'Funda de Silicona', available: phoneId === 'iphone_13' },
    { id: 'original', name: 'Funda Original', available: false },
    { id: 'rigida', name: 'Rígida', available: false },
    { id: 'transparente', name: 'Transparente', available: false },
  ]
  
  const cases = [
    { id: 1, name: 'Roja', color: '#ff6b6b' },
    { id: 2, name: 'Azul', color: '#4ecdc4' },
    { id: 3, name: 'Negro', color: '#2d3436' },
    { id: 4, name: 'Blanco', color: '#ffffff' },
    { id: 5, name: 'Verde', color: '#55efc4' },
    { id: 6, name: 'Rosa', color: '#fd79a8' },
    { id: 7, name: 'Morado', color: '#a29bfe' },
    { id: 8, name: 'Naranja', color: '#ff7675' },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.viewer}>
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          {phoneId === 'iphone_13' ? (
            <IPhoneModel caseColor={selectedCase} />
          ) : (
            <PhoneMesh caseColor={selectedCase} phoneModel={phoneId} />
          )}
          
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            minDistance={5}
            maxDistance={15}
          />
          
          <Environment preset="city" />
        </Canvas>
      </div>
      
      <div className={styles.sidebar}>
        <h3>Tipo de Funda</h3>
        <div className={styles.caseTypeGrid}>
          {caseTypes.map((type) => (
            <button
              key={type.id}
              className={`${styles.caseTypeButton} ${selectedCaseType === type.id ? styles.active : ''} ${!type.available ? styles.disabled : ''}`}
              onClick={() => type.available && setSelectedCaseType(type.id)}
              disabled={!type.available}
            >
              {type.name}
              {!type.available && <span className={styles.comingSoon}>Próximamente</span>}
            </button>
          ))}
        </div>
        
        <h3>Color de la Funda</h3>
        <div className={styles.caseGrid}>
          {cases.map((caseItem) => (
            <button
              key={caseItem.id}
              className={`${styles.caseButton} ${selectedCase === caseItem.color ? styles.active : ''}`}
              onClick={() => setSelectedCase(caseItem.color)}
            >
              <div 
                className={styles.colorPreview} 
                style={{ backgroundColor: caseItem.color }}
              />
              <span>{caseItem.name}</span>
            </button>
          ))}
        </div>
        
        <div className={styles.instructions}>
          <p>🖱️ Arrastra para rotar</p>
          <p>🔍 Scroll para zoom</p>
        </div>
      </div>
    </div>
  )
}

export default PhoneSimulator

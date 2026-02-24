

const MaintenancePage = () => {
	return (
		<div className={styles.maintenanceContainer}>
			<img
				src="/gif-de-carga/mantenimiento.jpg"
				alt="Página en mantenimiento"
				className={styles.maintenanceLogo}
				style={{ marginBottom: '1.5rem', maxWidth: '320px', width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 4px 24px #0002' }}
			/>
			<div className={styles.maintenanceTitle}>Estamos mejorando tu experiencia</div>
			<div className={styles.maintenanceText}>
				Esta sección está temporalmente en mantenimiento.<br />
				Pronto estará disponible de nuevo.<br />
				¡Gracias por tu paciencia y confianza!
			</div>
		</div>
	);
};

export default MaintenancePage;

import styles from './MaintenancePage.module.css';

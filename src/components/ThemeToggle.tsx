import { useTheme } from '../context/ThemeContext'
import styles from './ThemeToggle.module.css'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={styles.toggleContainer}>
      <label className={styles.switch}>
        <input 
          type="checkbox" 
          checked={theme === 'dark'}
          onChange={toggleTheme}
          aria-label="Cambiar tema"
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  )
}

export default ThemeToggle

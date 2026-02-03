import styles from './WhatsAppButton.module.css'

const WhatsAppButton = () => {
  return (
    <a
      className={styles.whatsapp}
      href="https://wa.me/000000000"
      target="_blank"
      rel="noopener"
      aria-label="Consultar stock por WhatsApp"
    >
      Consultar stock por WhatsApp
    </a>
  )
}

export default WhatsAppButton

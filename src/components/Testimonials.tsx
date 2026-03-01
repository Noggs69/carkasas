import React from 'react';
import styles from './Testimonials.module.css'

const Testimonials = () => {

  // Elfsight Google Reviews | Untitled Google Reviews
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <section id="prueba" className={styles.section}>
      <div className={styles.container}>
        <div className="elfsight-app-02437dd1-b5c8-4557-90ae-158bd23966a4" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
}

export default Testimonials

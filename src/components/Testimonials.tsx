import React from 'react';
import styles from './Testimonials.module.css'

const Testimonials = () => {
  const testimonials = [
    { quote: "Tiene bastantes modelos de carcasas para móviles. La empleada muy amable y atenta.", author: "Jose Luis Moreno", rating: 5, link: "https://share.google/72nAlnLk1eO4iDcRB" },
    { quote: "Super! La atención necesitaba un cargador y me lo facilitaron gracias!!", author: "Cristian González", rating: 5, link: "https://share.google/OLLYgQQGP50ibxXbg" },
    { quote: "Excelente servicio y atención al cliente.", author: "Ernesto Calatayud", rating: 5, link: "https://www.google.com/search?sca_esv=f553bdcaa43fd66a&sxsrf=ANbL-n6I-ZN0eF7oD1SkZJd_lswRX4DMKQ:1770278195584&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZWvP2_am0_Qbd9jcb0imWfpxucVESqpXtdkO2PWmVZPTW6X3IzW6DnD4xHjUPWRhReUc3JlscVdVOBxFKIZ38__KnsU&q=Mascarksas+Rese%C3%B1as&sa=X&ved=2ahUKEwiFnIGY8MGSAxXzKvsDHdOyHuwQ0bkNegQIKxAF&biw=1920&bih=953&dpr=1&aic=0" }
  ]

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

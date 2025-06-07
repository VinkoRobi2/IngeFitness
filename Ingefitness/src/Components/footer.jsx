import "../styles/pie.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Ingele Fitness. Todos los derechos reservados.
        </p>
        <div className="links">
          <a href="#" className="footer-link">Política de privacidad</a>
          <a href="#" className="footer-link">Términos y condiciones</a>
          <a href="#contacto" className="footer-link">Contacto</a>
        </div>
        <div className="social-media">
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon">Facebook</a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

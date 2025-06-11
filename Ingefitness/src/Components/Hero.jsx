import inicial from "../imagenes/main.jpg"
import "../styles/Hero.css";


const IMG_URL =
  inicial

export default function Hero() {
  return (
    <section className="hero-bg">
      <div className="hero-container">
        <div className="hero-texts">
          <h1 className="hero-title">
            El cambio de tu vida empieza <span id="aqui">aquí</span>
          </h1>
          <p className="hero-desc">
            Entrenamiento y nutrición personalizados, con acompañamiento real para tu transformación
          </p>
          <div className="hero-actions">
            <a href="#catalogo" className="hero-btn hero-btn-main">
              Ver Catálogo
            </a>
            <a href="#contacto" className="hero-btn hero-btn-outline">
              Contactar
            </a>
          </div>
          <div className="hero-proof">
            <span>+250 clientes satisfechas</span>
            <span className="hero-stars">★★★★★</span>
          </div>
        </div>
        {/* <div className="hero-img-wrapper">
          <img
            src={inicial}
            alt="Modelo en Bikini Fitness"
            className="hero-img"
          />
        </div> */}
        
        
      </div>
      <div className="hero-scroll">
        <span />
        <span />
      </div>
    </section>
  );
}

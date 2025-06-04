
import "../styles/Hero.css";


const IMG_URL =
  "https://images.unsplash.com/photo-1596464716121-9b7ca0e32fcb?auto=format&fit=crop&w=400&q=80";

export default function Hero() {
  return (
    <section className="hero-bg">
      <div className="hero-container">
        <div className="hero-texts">
          <h1 className="hero-title">
            Poses de Bikini Fitness para resaltar tu figura
          </h1>
          <p className="hero-desc">
            Sesiones de poses diseñadas por profesionales. Luce segura, sensual
            y poderosa en cada fotografía.
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
            <span>+50 modelos satisfechas</span>
            <span className="hero-stars">★★★★★</span>
          </div>
        </div>
        <div className="hero-img-wrapper">
          <img
            src={IMG_URL}
            alt="Modelo en Bikini Fitness"
            className="hero-img"
          />
        </div>
      </div>
      <div className="hero-scroll">
        <span />
        <span />
      </div>
    </section>
  );
}

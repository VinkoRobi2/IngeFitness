
import React, { useState } from "react";
import "../styles/Sobrenosotros.css";
import cards1 from "../imagenes/cards1.jpg";
import cards2 from "../imagenes/cards2.jpg";
import cards3 from "../imagenes/cards3.JPG";
import cards4 from "../imagenes/cards4.JPG";
import cards5 from "../imagenes/cards5.jpg";
import cards6 from "../imagenes/cards6.jpg";

const images = [
  cards1,
  cards2,
  cards3,
  cards4,
  cards5,
  cards6,
  

];

const AboutUs = () => {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((idx + images.length - 1) % images.length);
  const next = () => setIdx((idx + 1) % images.length);

  return (
    <section className="about-us">
      <div className="container">
        <h2 className="title">Inge Moeller</h2>
        <div className="content">
          <div className="text">
            <p className="description">
              Soy Inge Daniela Gallegos Moeller, Fitness Coach especializada en nutrición deportiva y preparación integral de atletas. Mi enfoque está orientado en transformar cuerpos y hábitos a través de planes de entrenamiento efectivos, asesoramiento nutricional personalizado y un acompañamiento real.
              <br /><br />
              Mi recorrido en el mundo del fitness comenzó desde muy joven, y a los 14 años me convertí en la atleta profesional más joven de la historia de la IFBB PRO LEAGUE, en la categoría Bikini Fitness. Este hito marcó un antes y un después en el deporte, llevando incluso a modificar las reglas internacionales de la categoria.
              <br /><br />
              Con más de una década de experiencia como atleta, habiendo ganado multiples torneos internacionales, mas mi deseo de ayudar a que otras personas cumplan sus metas, creé DivasFitness. Hoy ayudo tanto a competidores como a personas que desean mejorar su salud y su físico. Mi trabajo se basa en una preparación completa: entrenamiento, nutricion y enfoque mental.
              <br /><br />
              También soy fundadora de DivaPosing, donde les enseño el arte de posar, con tecnica, presencia y seguridad para que subas al escenario marcando la diferencia. Sin embargo, lo más importante para mí es acompañarte en una transformación real, desde adentro hacia afuera, para que logres ser la mejor version de ti.
              <br /><br />
              <span className="highlight">Entrena con propósito. Transforma tu cuerpo. Supera tus límites.</span>
            </p>
          </div>
          <div className="image-slider">
            <button className="arrow left" onClick={prev}>&#10094;</button>
            <img src={images[idx]} alt={`Foto ${idx+1}`} className="image" />
            <button className="arrow right" onClick={next}>&#10095;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

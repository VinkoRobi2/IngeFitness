import "../styles/Sobrenosotros.css"
const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <h2 className="title">Sobre Mí</h2>
        <div className="content">
          <img
            src="/images/IMG_3477.JPG" 
            alt="Ingele en competencia"
            className="image"
          />
          <p className="description">
            Soy Inge Daniela Gallegos Moeller, Fitness Coach especializada en nutrición deportiva y preparación integral de atletas. Mi enfoque está orientado a transformar cuerpos y hábitos a través de planes de entrenamiento efectivos, asesoramiento nutricional personalizado y un acompañamiento comprometido.
            <br /><br />
            Mi recorrido en el mundo del fitness comenzó desde muy joven, y a los 14 años me convertí en la atleta profesional más joven de la historia de la IFBB PRO LEAGUE, en la categoría Bikini Fitness. Este hito marcó un antes y un después en el deporte, llevando incluso a modificar las reglas internacionales.
            <br /><br />
            Con más de una década de experiencia como atleta y preparadora, creé DivasFitness. Hoy ayudo tanto a competidoras como a personas que desean mejorar su salud y su físico. Mi trabajo se basa en una preparación completa: entrenamiento, alimentación y mentalidad.
            <br /><br />
            También soy fundadora de DivaPosing, donde enseño técnicas de poses escénicas para que cada mujer se sienta fuerte, segura y empoderada en el escenario. Sin embargo, lo más importante para mí es acompañarte en una transformación real, desde adentro hacia afuera.
            <br /><br />
            <span className="highlight">Entrená con propósito. Transformá tu cuerpo. Superá tus límites.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

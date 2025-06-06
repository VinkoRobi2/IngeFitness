const AboutUs = () => {
  return (
    <section className="py-16 px-4 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Sobre Mí</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="/images/IMG_3477.JPG" // ← asegúrate de que esté en /public/images/
            alt="Ingele en competencia"
            className="w-full md:w-1/2 rounded-xl shadow-xl object-cover"
          />
          <p className="text-lg leading-relaxed text-justify">
            Soy Inge Daniela Gallegos Moeller, Fitness Coach especializada en nutrición deportiva y preparación integral de atletas. Mi enfoque está orientado a transformar cuerpos y hábitos a través de planes de entrenamiento efectivos, asesoramiento nutricional personalizado y un acompañamiento comprometido.
            <br /><br />
            Mi recorrido en el mundo del fitness comenzó desde muy joven, y a los 14 años me convertí en la atleta profesional más joven de la historia de la IFBB PRO LEAGUE, en la categoría Bikini Fitness. Este hito marcó un antes y un después en el deporte, llevando incluso a modificar las reglas internacionales.
            <br /><br />
            Con más de una década de experiencia como atleta y preparadora, creé DivasFitness. Hoy ayudo tanto a competidoras como a personas que desean mejorar su salud y su físico. Mi trabajo se basa en una preparación completa: entrenamiento, alimentación y mentalidad.
            <br /><br />
            También soy fundadora de DivaPosing, donde enseño técnicas de poses escénicas para que cada mujer se sienta fuerte, segura y empoderada en el escenario. Sin embargo, lo más importante para mí es acompañarte en una transformación real, desde adentro hacia afuera.
            <br /><br />
            <span className="font-semibold">Entrená con propósito. Transformá tu cuerpo. Superá tus límites.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

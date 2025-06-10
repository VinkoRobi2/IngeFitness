
import "../styles/Planes.css"
import starter from "../imagenes/planstarter.jpg"
import FH from "../imagenes/FH.jpg"
import dias from "../imagenes/21dias.jpeg"
import Bikini from "../imagenes/Bikini.jpg"
import Model from "../imagenes/Model.png"
const WHATSAPP_NUMBER = "5493513843509";

const planes = [
  {
    id: 1,
    title: "PLAN FIT MODEL",
    description:
      "Entrenamiento especializado para quienes desean elevar su presencia en pasarelas y editoriales de moda. Incluye asesoría en poses, ritmo de entrenamiento y postura para lograr una silueta esbelta y fotogénica.",
    imgUrl:
      Model,
  },
  {
    id: 2,
    title: "PLAN FIT & HEALTH",
    description:
      "Programa integral que combina rutinas de tonificación con guías nutricionales personalizadas. Ideal para mejorar tu condición física, potenciar tu salud y mantener un estilo de vida equilibrado.",
    imgUrl:
      FH,
  },
  {
    id: 3,
    title: "PLAN STARTER",
    description:
      "Diseñado para principiantes: rutinas sencillas y progresivas que te ayudarán a crear el hábito de entrenar. Incluye seguimiento semanal y tips de motivación para que no te detengas.",
    imgUrl:
      starter
  },
  {
    id: 4,
    title: "PLAN BIKINI FITNESS",
    description:
      "Clase intensiva enfocada en esculpir glúteos, abdomen y caderas. Perfecto si quieres trabajar tus poses en bikini y lucir un cuerpo tonificado para tus fotos o concursos fitness.",
    imgUrl:
      Bikini,
  },
  {
    id: 5,
    title: "PLAN DESAFÍO 21 🔥",
    description:
      "Reto de 21 días con entrenamientos diarios, planes de alimentación y soporte continuo. Si aceptas este desafío, verás resultados visibles en 3 semanas si te comprometes al 100 %.",
    imgUrl:
      dias,
  },
];

export default function PlansSection() {
  return (
    <section className="plans-section">
      <h2 className="plans-title">Nuestros Planes</h2>
      <div className="plans-container">
        {planes.map((plan) => (
          <div className="plans-card" key={plan.id}>
            <div className="plans-img-wrapper">
              <img
                src={plan.imgUrl}
                alt={plan.title}
                className="plans-img"
              />
            </div>
            <div className="plans-content">
              <h3 className="plans-heading">{plan.title}</h3>
              <p className="plans-text">{plan.description}</p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `Hola,%20quiero%20más%20info%20sobre%20${plan.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="plans-btn"
              >
                Saber más
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

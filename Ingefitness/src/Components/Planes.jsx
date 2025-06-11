
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
      "Pensado para mujeres que quieren dar su primer paso en el fitness competitivo, sin necesidad de gran masa muscular.  Lográ un cuerpo armónico, estético y femenino con plan nutricional, entrenamiento, asesoramiento en suplementación y acompañamiento personalizado.  Si soñás con subirte al escenario y destacar por tu belleza, armonía y elegancia, este plan es para vos.",
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
      "Diseñado para principiantes: rutinas de tonificación simples y progresivas, con guías claras y plan nutricional personalizado. Incluye seguimiento semanal y tips de motivación para ayudarte a crear el hábito de entrenar, mejorar tu condición física y mantener un estilo de vida saludable.",
    imgUrl:
      starter
  },
  {
    id: 4,
    title: "PLAN BIKINI FITNESS",
    description:
      "Ideal para mujeres que buscan llevar su físico al siguiente nivel, con mayor definición y desarrollo muscular, manteniendo siempre la estética y la feminidad que exige esta categoría.  Incluye plan nutricional personalizado, seguimiento constante, entrenamiento específico y asesoramiento en suplementación..",
    imgUrl:
      Bikini,
  },
  {
    id: 5,
    title: "PLAN DESAFÍO 21 🔥",
    description:
      "Plan rápido y efectivo, ideal para eventos, sesiones de fotos o viajes. Incluye entrenamiento, nutrición y seguimiento personalizado para que logres verte y sentirte increíble en tan solo 21 días.",
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
                EMPEZÀ HOY TU CAMBIO
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

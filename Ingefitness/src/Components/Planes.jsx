
import "../styles/Planes.css"


const WHATSAPP_NUMBER = "519XXXXXXXX";

const planes = [
  {
    id: 1,
    title: "PLAN FIT MODEL",
    description:
      "Entrenamiento especializado para quienes desean elevar su presencia en pasarelas y editoriales de moda. Incluye asesoría en poses, ritmo de entrenamiento y postura para lograr una silueta esbelta y fotogénica.",
    imgUrl:
      "https://images.unsplash.com/photo-1571019613913-7f39f464b05e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "PLAN FIT & HEALTH",
    description:
      "Programa integral que combina rutinas de tonificación con guías nutricionales personalizadas. Ideal para mejorar tu condición física, potenciar tu salud y mantener un estilo de vida equilibrado.",
    imgUrl:
      "https://images.unsplash.com/photo-1594737625785-84232a9fa1e9?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "PLAN STARTER",
    description:
      "Diseñado para principiantes: rutinas sencillas y progresivas que te ayudarán a crear el hábito de entrenar. Incluye seguimiento semanal y tips de motivación para que no te detengas.",
    imgUrl:
      "https://images.unsplash.com/photo-1554284126-5833df49a016?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    title: "PLAN BIKINI FITNESS",
    description:
      "Clase intensiva enfocada en esculpir glúteos, abdomen y caderas. Perfecto si quieres trabajar tus poses en bikini y lucir un cuerpo tonificado para tus fotos o concursos fitness.",
    imgUrl:
      "https://images.unsplash.com/photo-1554284126-5833df49a016?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    title: "PLAN DESAFÍO 21 🔥",
    description:
      "Reto de 21 días con entrenamientos diarios, planes de alimentación y soporte continuo. Si aceptas este desafío, verás resultados visibles en 3 semanas si te comprometes al 100 %.",
    imgUrl:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80",
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

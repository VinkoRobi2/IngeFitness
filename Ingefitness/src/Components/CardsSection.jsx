import React, { useState } from "react";
import "../styles/CardsSection.css";

// Datos de ejemplo: puedes duplicar o modificar según tus clases
const clases = [
  {
    id: 1,
    title: "Clase Básica Bikini Fitness",
    imgUrl:
      "https://images.unsplash.com/photo-1571019613913-7f39f464b05e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "Clase Avanzada Bikini Fitness",
    imgUrl:
      "https://images.unsplash.com/photo-1594737625785-84232a9fa1e9?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "Entrenamiento en Pareja",
    imgUrl:
      "https://images.unsplash.com/photo-1554284126-5833df49a016?auto=format&fit=crop&w=400&q=80",
  },
];

export default function CardsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedClase, setSelectedClase] = useState(null);

  // Datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    descripcion: "",
    horario: "",
  });

  const horariosDisponibles = [
    "Lunes 6:00 AM",
    "Martes 7:00 AM",
    "Miércoles 6:00 PM",
    "Jueves 8:00 AM",
    "Viernes 7:00 PM",
  ];

  function abrirModal(clase) {
    setSelectedClase(clase);
    setModalOpen(true);
  }

  function cerrarModal() {
    setModalOpen(false);
    setSelectedClase(null);
    setFormData({
      nombre: "",
      telefono: "",
      correo: "",
      descripcion: "",
      horario: "",
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos (API, correo, etc.)
    console.log("Enviando formulario:", formData, "para clase:", selectedClase);
    alert(`¡Gracias ${formData.nombre}! Tu solicitud para "${selectedClase.title}" ha sido enviada.`);
    cerrarModal();
  }

  return (
    <section className="cards-section">
      <h2 className="cards-title">Agéndate a nuestras clases</h2>
      <div className="cards-container">
        {clases.map((clase) => (
          <div className="card" key={clase.id}>
            <div className="card-img-wrapper">
              <img src={clase.imgUrl} alt={clase.title} className="card-img" />
            </div>
            <div className="card-content">
              <h3 className="card-heading">{clase.title}</h3>
              <p className="card-text">
                ¡Apúntate y luce tu mejor versión con nuestras sesiones exclusivas de
                Bikini Fitness! Clase diseñada para tonificar, definir y realzar tu
                figura.
              </p>
              <button className="card-btn" onClick={() => abrirModal(clase)}>
                Agendarse
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={cerrarModal}>&times;</button>
            <h3 className="modal-title">
              Agendar: <span>{selectedClase.title}</span>
            </h3>
            <form className="modal-form" onSubmit={handleSubmit}>
              <label>
                Nombre completo:
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Teléfono:
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Correo electrónico:
                <input
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Descripción / Mensaje:
                <textarea
                  name="descripcion"
                  rows="3"
                  value={formData.descripcion}
                  onChange={handleChange}
                />
              </label>
              <label>
                Horario disponible:
                <select
                  name="horario"
                  value={formData.horario}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona uno</option>
                  {horariosDisponibles.map((h, i) => (
                    <option key={i} value={h}>
                      {h}
                    </option>
                  ))}
                </select>
              </label>
              <button type="submit" className="modal-submit">
                Enviar solicitud
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

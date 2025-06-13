import React, { useState } from "react";
import "../styles/testigos.css";
import testigo1 from "../imagenes/testigos1.jpg";
import testigos2 from "../imagenes/testigos2.jpg";
import testigos3 from "../imagenes/testigos3.jpg"; // Asegúrate de tener esta imagen

const items = [
  {
    image: testigo1,
    caption: "Transformación 1",
  },
  {
    image: testigos2,
    caption: "Transformación 2",
  },
  {
    image: testigos3, // Asegúrate de tener la imagen correcta aquí
    caption: "Transformación 3",
  },
];

export default function Testigos() {
  const [idx, setIdx] = useState(0);
  const [slider, setSlider] = useState(100); // Empieza con la imagen al 100%

  const prev = () => setIdx((idx + items.length - 1) % items.length);
  const next = () => setIdx((idx + 1) % items.length);

  return (
    <section className="testigos">
      <div className="container">
        <h2 className="title">Testigos</h2>
        <div className="carousel">
          <button className="arrow left" onClick={prev}>‹</button>
          <div className="slider-wrapper">
            <img
              src={items[idx].image}
              alt="Transformación"
              className="img"
              style={{ width: `${slider}%` }} // Control deslizante para cambiar el tamaño de la imagen
            />
            <input
              type="range"
              min="0"
              max="100"
              value={slider}
              className="slider"
              onChange={e => setSlider(e.target.value)}
            />
            <span className="caption">{items[idx].caption}</span>
          </div>
          <button className="arrow right" onClick={next}>›</button>
        </div>
      </div>
    </section>
  );
}

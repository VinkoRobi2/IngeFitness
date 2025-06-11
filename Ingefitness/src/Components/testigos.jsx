import React, { useState } from "react";
import "../styles/testigos.css";

const items = [
  {
    before: "/images/test1-before.jpg",
    after: "/images/test1-after.jpg",
    caption: "Transformación 1",
  },
  {
    before: "/images/test2-before.jpg",
    after: "/images/test2-after.jpg",
    caption: "Transformación 2",
  },
  {
    before: "/images/test3-before.jpg",
    after: "/images/test3-after.jpg",
    caption: "Transformación 3",
  },
];

export default function Testigos() {
  const [idx, setIdx] = useState(0);
  const [slider, setSlider] = useState(50);

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
              src={items[idx].before}
              alt="Antes"
              className="img before"
            />
            <img
              src={items[idx].after}
              alt="Después"
              className="img after"
              style={{ width: `${slider}%` }}
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

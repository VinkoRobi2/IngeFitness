import React, { useState, useEffect } from "react";
import "../styles/Productos.css"; 
import producto1 from "../imagenes/producto1.jpg";
import producto3 from "../imagenes/producto3.jpg";
import producto2 from "../imagenes/producto2.jpg";

const PRODUCTS = [
  {
    id: 1,
    title: "Producto 1",
    category: "tech",
    image: producto1,
    description: "Descripción breve del producto, características clave, precio.",
  },
  {
    id: 2,
    title: "Producto 2",
    category: "home",
    image: producto2,
    description: "Descripción breve del producto, características clave, precio.",
  },
  {
    id: 3,
    title: "Producto 3",
    category: "outdoor",
    image: producto3,
    description: "Descripción breve del producto, características clave, precio.",
  },
  
];

export default function Productos() {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".product-card").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [filter]);

  const handleFilter = (cat) => {
    setFilter(cat);
  };

  const filteredProducts = PRODUCTS.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section className="products-section">
      <h2 className="products-title">Productos Destacados</h2>

      <div className="products-filters">
        {["Todos", "Joyeria", "Bikinis", "Sprays"].map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => handleFilter(cat)}
            data-filter={cat}
          >
            {cat === "all" ? "Todos" : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            data-category={product.category}
          >
            <div className="card-inner">

              <div className="card-face card-front">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
              </div>
              <div className="card-face card-back">
                <p>{product.description}</p>
                <button className="card-btn">Ver más</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React, { useState, useEffect, useRef } from "react";
import "../styles/Productos.css";
import producto1 from "../imagenes/producto1.jpg";
import producto3 from "../imagenes/producto3.jpg";
import producto2 from "../imagenes/producto2.jpg";

const PRODUCTS = [
  {
    id: 1,
    title: "Producto 1",
    category: "joyeria",
    image: producto1,
    description: "Descripción breve del producto, características clave, precio.",
  },
  {
    id: 2,
    title: "Producto 2",
    category: "bikinis",
    image: producto2,
    description: "Descripción breve del producto, características clave, precio.",
  },
  {
    id: 3,
    title: "Producto 3",
    category: "sprays",
    image: producto3,
    description: "Descripción breve del producto, características clave, precio.",
  },
  {
    id: 4,
    title: "Producto 4",
    category: "joyeria",
    image: producto1,
    description: "Otro producto joyería.",
  },
  {
    id: 5,
    title: "Producto 5",
    category: "bikinis",
    image: producto2,
    description: "Otro producto bikini.",
  },
  {
    id: 6,
    title: "Producto 6",
    category: "sprays",
    image: producto3,
    description: "Otro producto spray.",
  },
  // Puedes agregar más productos si quieres probar el scroll
];

export default function Productos() {
  const [filter, setFilter] = useState("all");
  const carouselRef = useRef(null);

  useEffect(() => {
    // IntersectionObserver para animaciones (igual que antes)
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
    if (cat === "all" && carouselRef.current) {
      carouselRef.current.scrollLeft = 0; // reset scroll al cambiar a todos
    }
  };

  const filteredProducts = PRODUCTS.filter(
    (p) => filter === "all" || p.category === filter
  );

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 320; // Ajusta según ancho de tarjeta + gap
      if (direction === "left") {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const categories = ["all", "joyeria", "bikinis", "sprays"];

  return (
    <section className="products-section">
      <h2 className="products-title">Productos Destacados</h2>

      <div className="products-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => handleFilter(cat)}
            data-filter={cat}
          >
            {cat === "all"
              ? "Todos"
              : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {filter === "all" ? (
        <div className="carousel-container">
          <button
            className="carousel-arrow left-arrow"
            onClick={() => scrollCarousel("left")}
            aria-label="Scroll Left"
          >
            &#8592;
          </button>

          <div className="products-grid carousel" ref={carouselRef}>
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

          <button
            className="carousel-arrow right-arrow"
            onClick={() => scrollCarousel("right")}
            aria-label="Scroll Right"
          >
            &#8594;
          </button>
        </div>
      ) : (
        <div className="products-grid filtered-grid">
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
      )}
    </section>
  );
}

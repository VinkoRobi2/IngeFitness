import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

const navLinks = [
  { name: "Inicio", href: "#" },
  { name: "Catálogo", href: "#catalogo" },
  { name: "Sobre mí", href: "#about" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar-header${scrolled ? " navbar-scrolled" : ""}`}>
      <nav className="navbar">
        <a
          href="#"
          className="navbar-logo"
          onMouseOver={(e) => e.currentTarget.classList.add("bounce")}
          onMouseOut={(e) => e.currentTarget.classList.remove("bounce")}
        >
          BikiniGold
        </a>
        <button
          className={`navbar-toggle${open ? " open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`navbar-links${open ? " active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={active === link.name ? "active" : ""}
                onClick={() => {
                  setActive(link.name);
                  setOpen(false);
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="navbar-social">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle
                  cx="11"
                  cy="11"
                  r="8.5"
                  stroke="#FFD700"
                  strokeWidth="2"
                />
                <rect x="7" y="7" width="8" height="8" rx="4" fill="#FFD700" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

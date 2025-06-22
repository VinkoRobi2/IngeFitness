import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Productos", href: "#entrenamientos" },
  { name: "Planes", href: "#planes" },
  { name: "Sobre mí", href: "#about" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "Contacto", href: "#contacto" },
  { name: "Admin", href: "/admin" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const activeLink = navLinks.find(
    (link) => link.href === location.pathname || (link.href.startsWith("#") && location.hash === link.href)
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar-header${scrolled ? " navbar-scrolled" : ""}`}>
      <nav className="navbar">
        <Link
          to="/"
          className="navbar-logo"
          onMouseOver={(e) => e.currentTarget.classList.add("bounce")}
          onMouseOut={(e) => e.currentTarget.classList.remove("bounce")}
          onClick={() => setOpen(false)}
        >
          FitnessbyMoeller
        </Link>
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
              {link.href.startsWith("/") ? (
                <Link
                  to={link.href}
                  className={activeLink?.name === link.name ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className={activeLink?.name === link.name ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

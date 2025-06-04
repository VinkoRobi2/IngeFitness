import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";
import logo from "../imagenes/logo.jpeg"

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.success == true) {
        localStorage.setItem("token", data.token);
        navigate("/admin/panel");
      } else {
        setError(data.message || "Error al iniciar sesión");
      }
    } catch {
      setError("Error de conexión con el servidor");
    }
  };

  return (
    <div className="admin-login-container">
      <img
        src={logo}
        alt="BikiniGold Logo"
        className="admin-login-logo"
      />
      <form onSubmit={handleSubmit} className="admin-login-form">
        <h2>Iniciar Sesión Admin</h2>

        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          autoFocus
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Ingresar</button>

        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}

import { useState } from "react";

import styles from "./../auth.module.css";

export default function Registro({ handleSubmit }) {
  const [usuario, setUsuario] = useState({ email: "", password: "" });
  return (
    <div>
      <h2>Crear cuenta</h2>
      <form className={styles.form}>
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={usuario.email}
          onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
        />
        <input
          type="password"
          className="input"
          placeholder="Contraseña"
          value={usuario.password}
          onChange={(e) => setUsuario({ ...usuario, password: e.target.value })}
        />
        <button
          type="submit"
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(usuario);
            setUsuario({ email: "", password: "" });
          }}
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}

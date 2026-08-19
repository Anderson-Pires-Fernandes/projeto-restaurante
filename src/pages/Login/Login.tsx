// MODO ANTIGO import "./Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router";

import axios from "axios";
import Swal from "sweetalert2";

import styles from "./Login.module.css"; // MODO novo com CSS modules
import stylesIndex from "../../index.module.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function fazerLogin(event: React.SubmitEvent) {
    try {
      event.preventDefault();

      await axios.post("http://localhost:8888/auth/login", {
        email: email,
        senha: senha,
      });

      navigate("/mesas");
    } catch (error) {
      Swal.fire({
        title: error.response.data.error,
        icon: "error",
      });
    }
  }

  return (
    <form className={styles.container} onSubmit={fazerLogin}>
      <span className={styles.logo}>🍽️</span>
      <h1 className={styles.nome}>Sabor & Arte</h1>
      <p className={styles.subtitulo}>Acesse o painel do restaurante</p>

      <div className={stylesIndex.containerInput}>
        <label>Email</label>
        <input
          type="email"
          required
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={stylesIndex.containerInput}>
        <label>Senha</label>
        <input
          type="password"
          required
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>

      <button type="submit">Entrar</button>
    </form>
  );
}

export default Login;

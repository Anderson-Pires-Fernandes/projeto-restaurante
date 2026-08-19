// MODO ANTIGO import "./Login.module.css";
import styles from "./Login.module.css"; // MODO novo com CSS modules
import stylesIndex from "../../index.module.css";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function fazerLogin(event) {
    event.preventDefault();

    axios.post("http://localhost:8888/auth/login", {
      email: email,
      senha: senha,
    });
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
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={stylesIndex.containerInput}>
        <label>Senha</label>
        <input
          type="password"
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

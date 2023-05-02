import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css';

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRecSenha = (event) => {
    navigate("/RecuperarSenha")
  };

  const handleRegister = (event) => {
    navigate("/Cadastro")
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onLogin(email, password);
    navigate("/");
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
        <button className="button" onClick={handleRecSenha}>
          Recuperar senha
        </button>
        <button className="button" onClick={handleRegister}>
          Cadastre-se
        </button>
      </form>
    </div>
  );
}

export default Login;

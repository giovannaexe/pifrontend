import React, { useState } from 'react';
import '../Styles/Cadastro.css'
import { Navigate, useNavigate } from 'react-router-dom';

function Cadastro(props) {
  const navigate = useNavigate()
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleLogin = (event) => {
    navigate("/Login")
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode enviar os dados do formulário para a API, por exemplo.
    console.log('Nome: ', nome);
    console.log('Email: ', email);
    console.log('Senha: ', senha);
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" value={nome} onChange={handleNomeChange} />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />

        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" value={senha} onChange={handleSenhaChange} />

        <button className='button' onClick={handleLogin}>Cadastrar</button>
        <button className="button" onClick={handleLogin}>Voltar</button>
      </form>
    </div>
  );
}

export default Cadastro;

import React from 'react';
import '../Styles/RecuperarSenha.css'
import { useNavigate } from 'react-router-dom';

function RecuperarSenha(props) {
  const navigate = useNavigate()

  const handleLogin = (event) => {
    navigate("/Login")
  };
  return (

    <div>
      <h1>Recuperação de Senha</h1>
      <form>
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" />

        <button className='button' onClick={handleLogin}>Enviar</button>
        <button className="button" onClick={handleLogin}>Voltar</button>
      </form>
    </div>
  );
}

export default RecuperarSenha;
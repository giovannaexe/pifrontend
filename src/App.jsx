import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalogo from './pages/CatalogoViagens';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import RecuperarSenha from './pages/RecuperarSenha';

function App() {

  const [logado, setLogado] = useState(false);

  function handleLogin() {
    setLogado(true);
  }

  function handleLogout() {
    setLogado(false);
  }

  return (
    <BrowserRouter>
      <Routes>
        {logado ?
          <Route path="/" element={<Catalogo onLogout={handleLogout} />} />
          :
          <Route path="/Login" element={<Login onLogin={handleLogin} />} />
        }
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/RecuperarSenha" element={<RecuperarSenha />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
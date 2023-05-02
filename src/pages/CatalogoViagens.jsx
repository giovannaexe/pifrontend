import React, { useState } from 'react';
import '../Styles/CatalogoViagens.css';
import { useNavigate } from 'react-router-dom';

const DESTINOS = [
  {
    id: 1,
    nome: 'Praia do Rosa',
    descricao: 'Lugar paradisíaco para relaxar e curtir o mar',
    preco: 1000,
    imagem: 'https://picsum.photos/id/237/400/300'
  },
  {
    id: 2,
    nome: 'Canela',
    descricao: 'Cidade encantadora com belas paisagens naturais',
    preco: 800,
    imagem: 'https://picsum.photos/id/238/400/300'
  },
  {
    id: 3,
    nome: 'Buenos Aires',
    descricao: 'Capital argentina com muita história e cultura',
    preco: 1200,
    imagem: 'https://picsum.photos/id/239/400/300'
  },
  {
    id: 4,
    nome: 'Santiago',
    descricao: 'Capital chilena com muitos atrativos turísticos',
    preco: 1500,
    imagem: 'https://picsum.photos/id/240/400/300'
  }
];

function CatalogoViagens(props) {
  const [destinos, setDestinos] = useState(DESTINOS);
  const navigate = useNavigate()
  function handleClick(event) {
    props.onLogout(event)
    navigate('/login')
  }

  return (
    <div>
      <h1>Catálogo de Viagens</h1>
      <div className="destinos-container">
        {destinos.map((destino) => (
          <div className="destino-card" key={destino.id}>
            <img className="destino-card-img" src={destino.imagem} alt={destino.nome} />
            <h2 className="destino-card-title">{destino.nome}</h2>
            <p className="destino-card-desc">{destino.descricao}</p>
            <p className="destino-card-price">Preço: R$ {destino.preco}</p>
            <button className="destino-card-btn">Comprar</button>
          </div>

        ))}
        <div><button onClick={handleClick}>Sair</button></div>
      </div>
    </div>
  );
}

export default CatalogoViagens;

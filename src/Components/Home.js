import React from 'react';
import Menu from './Menu.js';
import Panel from './Panel.js';
import { Link } from 'react-router-dom';
import './scss/App.scss';
import './scss/Panel.scss';
import './scss/Button.scss';

function Home() {
  return (
    <div className="container">
      <Menu/>
      <div className="home">
        <Panel />
        <h1>Flashy Foods</h1>
        <h4>¡Hola, Bienvenido a Flashy Foods!, un juego en el que te podrás divertir y aprender lo que necesitas saber sobre una alimentación adecuada.</h4>
        <h4>Juega nuestro demo para ver si te gusta y si es así, ¡regístrate para poder competir con otros jugadores!</h4>
        <button className="Play"><Link className="link" to="/Instrucciones">Prueba el Demo</Link></button>
      </div>
    </div>
  );
}

export default Home;
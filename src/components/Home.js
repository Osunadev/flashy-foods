import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './elements/Menu';

function Home() {
  return (
    <div className='home'>
      <Menu />
      <div className='content-home'>
        <h1>flashy foods</h1>
        <p>
          Bienvenido a Flashy Foods, un juego en el que te podrás divertir y aprender lo que
          necesitas saber sobre una alimentación adecuada.
        </p>
        <p>
          Juega nuestro demo para ver si te gusta y si es así, ¡regístrate para poder competir con
          otros jugadores!
        </p>
        <Link className='play' to='/Instrucciones'></Link>
      </div>
    </div>
  );
}

export default Home;

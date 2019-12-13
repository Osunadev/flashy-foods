import React from 'react';
import { Link } from 'react-router-dom';

function Resultado() {
  return (
    <div className='tarjeta'>
      <div className='content-resultado'>
        <Link className='salir' to='/'></Link>
        <h1>¡Has terminado!</h1>
        <p>Esperamos te hayas divertido, vuelve pronto cuando el juego esté terminado.</p>
        <p>¡Hasta luego!</p>
      </div>
    </div>
  );
}

export default Resultado;

import React from 'react';
import { Link } from 'react-router-dom';

function Instrucciones() {
  return (
    <div className='tarjeta'>
      <div className='content-instrucciones'>
        <Link className='volver' to='/'></Link>
        <h1>Instrucciones</h1>
        <p>
          A continuación se te presentaran tres preguntas sobre tus costumbres alimenticias, y
          deberás elegir cual de los alimentos comes con regularidad.
        </p>
        <p>¡Acompleta el DEMO!</p>
        <p>¿Estás listo?</p>
        <button className='continuar'>
          <Link className='link' to='/quiz/primera'>
            Continuar
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Instrucciones;

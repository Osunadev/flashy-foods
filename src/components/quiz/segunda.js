import React from 'react';
import { Link } from 'react-router-dom';
import FlashCard from '../elements/FlashCard';

import refresco from '../img/2-1.svg';
import bebidaNatural from '../img/2-2.svg';
import lacteos from '../img/2-3.svg';

function segunda() {
  return (
    <div className='quiz'>
      <div className='content-quiz'>
        <Link className='salir' to='/'></Link>
        <h3>¿Cuál bebida tomas durante el día?</h3>

        <div className='deck'>
          <Link className='link' to='/quiz/tercera'>
            <FlashCard descripcion='Refrescos azucarados' imgSrc={refresco} />
          </Link>
          <Link className='link' to='/quiz/tercera'>
            <FlashCard descripcion='Agua o jugos naturales' imgSrc={bebidaNatural} />
          </Link>
          <Link className='link' to='/quiz/tercera'>
            <FlashCard descripcion='Lacteos' imgSrc={lacteos} />
          </Link>
        </div>

        <button className='continuar'>
          <Link className='link' to='/quiz/tercera'>
            Saltar
          </Link>
        </button>
      </div>
    </div>
  );
}

export default segunda;

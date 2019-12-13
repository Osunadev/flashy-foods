import React from 'react';
import { Link } from 'react-router-dom';
import FlashCard from '../elements/FlashCard';

import pescado from '../img/3-1.svg';
import res from '../img/3-2.svg';
import cerdo from '../img/3-3.svg';

function tercera() {
  return (
    <div className='quiz'>
      <div className='content-quiz'>
        <Link className='salir' to='/'></Link>
        <h3>¿Cuál es tu proteína favorita?</h3>

        <div className='deck'>
          <Link className='link' to='/quiz/Resultado'>
            <FlashCard descripcion='Aves y pescados' imgSrc={pescado} />
          </Link>
          <Link className='link' to='/quiz/Resultado'>
            <FlashCard descripcion='Res' imgSrc={res} />
          </Link>
          <Link className='link' to='/quiz/Resultado'>
            <FlashCard descripcion='Cerdo' imgSrc={cerdo} />
          </Link>
        </div>

        <button className='continuar'>
          <Link className='link' to='/quiz/Resultado'>
            Saltar
          </Link>
        </button>
      </div>
    </div>
  );
}

export default tercera;

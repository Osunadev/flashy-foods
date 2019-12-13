import React from 'react';
import { Link } from 'react-router-dom';
import FlashCard from '../elements/FlashCard';

import frutas from '../img/1-1.svg';
import cereales from '../img/1-2.svg';
import carnes from '../img/1-3.svg';

function primera() {
  return (
    <div className='quiz'>
      <div className='content-quiz'>
        <Link className='salir' to='/'></Link>
        <h3>¿Que sueles comer en el desayuno?</h3>

        <div className='deck'>
          <Link className='link' to='/quiz/segunda'>
            <FlashCard descripcion='Frutas y verduras' imgSrc={frutas} />
          </Link>
          <Link className='link' to='/quiz/segunda'>
            <FlashCard descripcion='Cereales y lácteos' imgSrc={cereales} />
          </Link>
          <Link className='link' to='/quiz/segunda'>
            <FlashCard descripcion='Carnes rojas o cosas grasas' imgSrc={carnes} />
          </Link>
        </div>

        <button className='continuar'>
          <Link className='link' to='/quiz/segunda'>
            Saltar
          </Link>
        </button>
      </div>
    </div>
  );
}

export default primera;

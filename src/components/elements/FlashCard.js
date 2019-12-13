import React from 'react';
import '../scss/flashcard.scss';

function FlashCard({ imgSrc, descripcion }) {
  return (
    <div class='flashCard-container'>
      <div class='flashCard-flipper'>
        <button class='front-flashCard'>
          <img src={imgSrc} alt='imagen' />
        </button>
        <button class='back-flashCard'>
          <h4>{descripcion}</h4>
        </button>
      </div>
    </div>
  );
}

export default FlashCard;

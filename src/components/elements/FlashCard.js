import React from 'react';
import '../scss/flashcard.scss'

function FlashCard(props) {
    return (
        <div class="flashCard-container">
            <div class="flashCard-flipper">
                <button class="front-flashCard">
                    <img url={props.imgUrl} alt="imagen"/>
                </button>
                <button class="back-flashCard">
                    <h4>{props.descripcion}</h4>
                </button>
            </div>
        </div>
    );
}
 
export default FlashCard;
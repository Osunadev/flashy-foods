import React from 'react';
import { Link } from "react-router-dom";
import FlashCard from '../elements/FlashCard'

function primera() {
    return (
      <div className="content-quiz">
        <Link className="salir" to="/"></Link>
        <h3>¿Que sueles comer en el desayuno?</h3>

        <div className="deck">
            <Link className="link" to="/quiz/segunda">
                <FlashCard
                    descripcion="Frutas y verduras"
                    imgUrl="../img/1-1.svg"
                />
            </Link>
            <Link className="link" to="/quiz/segunda">
                <FlashCard
                    descripcion="Cereales y lacteos"
                    imgUrl="../img/1-2.svg"
                />
            </Link>
            <Link className="link" to="/quiz/segunda">
                <FlashCard
                    descripcion="Carnes rojas o cosas grasas"
                    imgUrl="../img/1-3.svg"
                />
            </Link>
        </div>

        <button className="continuar"><Link className="link" to="/quiz/segunda">Saltar</Link></button>
      </div>
    );
}
 
export default primera;
import React from 'react';
import { Link } from "react-router-dom";
import FlashCard from '../elements/FlashCard'

function tercera() {
    return (
      <div className="content-quiz">
        <Link className="salir" to="/"></Link>
        <h3>¿Cuál es tu proteína favorita?</h3>

        <div className="deck">
            <Link className="link" to="/quiz/Resultado">
                <FlashCard
                    descripcion="Aves y pescados"
                    imgUrl="../img/3-1.svg"
                />
            </Link>
            <Link className="link" to="/quiz/Resultado">
                <FlashCard
                    descripcion="Res"
                    imgUrl="../img/3-2.svg"
                />
            </Link>
            <Link className="link" to="/quiz/Resultado">
                <FlashCard
                    descripcion="Cerdo"
                    imgUrl="../img/3-3.svg"
                />
            </Link>
        </div>

        <button className="continuar"><Link className="link" to="/quiz/Resultado">Saltar</Link></button>
      </div>
    );
}
 
export default tercera;
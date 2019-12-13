import React from 'react';
import { Link } from "react-router-dom";
import FlashCard from '../elements/FlashCard'

function segunda() {
    return (
      <div className="content-quiz">
        <Link className="salir" to="/"></Link>
        <h3>¿Cuál bebida tomas durante el día?</h3>

        <div className="deck">
            <Link className="link" to="/quiz/tercera">
                <FlashCard
                    descripcion="Refrescos azucarados"
                    imgUrl="../img/2-1.svg"
                />
            </Link>
            <Link className="link" to="/quiz/tercera">
                <FlashCard
                    descripcion="Agua o jugos naturales"
                    imgUrl="../img/2-2.svg"
                />
            </Link>
            <Link className="link" to="/quiz/tercera">
                <FlashCard
                    descripcion="Lacteos"
                    imgUrl="../img/2-3.svg"
                />
            </Link>
        </div>

        <button className="continuar"><Link className="link" to="/quiz/tercera">Saltar</Link></button>
      </div>
    );
}
 
export default segunda;
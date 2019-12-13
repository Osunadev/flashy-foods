import React from 'react';
import { Link } from "react-router-dom";

function Resultado() {
    return (
      <div className="content-resultado">
        <Link className="salir" to="/"></Link>
        <h1>¡Haz terminado!</h1>
        <p>Esperamos te hayas divertido, vuelve pronto cuando el juego este terminado.</p>
        <p>¡Hasta luego!</p>
      </div>
    );
}
 
export default Resultado;
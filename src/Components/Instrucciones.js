import React from 'react';
import { Link } from 'react-router-dom';
import './scss/Panel.scss';
import './scss/Button.scss';


function Instrucciones() {
  return (
    <div className="container">
      <div className="categorias">
        <button className="Atras"><Link className="link" to="/Home">Volver</Link></button>
        <h1>Instrucciones</h1>
        <h4>Se te presentaran unas cartas que contienen el dibujo de un alimento.</h4>
        <h4>Deberás decidir si dicho alimento es saludable dando swipe a la izquierda, o no saludable dando swipe a la derecha.</h4>
        <h4>Intenta hacer la mayor cantidad de puntos posibles.</h4>
        <button className="Play"><Link className="link" to="/Home">Juegar</Link></button>
      </div>
    </div>
  );
}

export default Instrucciones;
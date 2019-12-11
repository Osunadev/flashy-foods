import React from 'react';
import { Link } from 'react-router-dom';
import Panel from './Panel.js';
import './scss/Panel.scss';
import './scss/Button.scss';

function FormLogIn() {
  return (
    <div>
      <Panel />
      <h1>Inicio de sesión</h1>
      <input placeholder="Nombre de Usuario"></input>
      <input type="password" placeholder="Contraseña"></input>
      <button className="Entrar"><Link className="link" to="/Instrucciones">Entrar</Link></button>
      <h4>¿No tienes una cuenta? <Link className="link" to="/SignUp">Crea una</Link></h4>
    </div>
  );
}

export default FormLogIn;

import React from 'react';
import { Link } from "react-router-dom";
import Menu from "./elements/Menu";

function LogIn() {
    return (
      <div>
        <Menu/>
        <div className="content-login">
          <h1>inicio de sesión</h1>
          <input type="text" placeholder="Apodo"></input>
          <input type="password" placeholder="Contraseña"></input>
          <button className="entrar"><Link className="link" to="./demo/Instrucciones">Entrar</Link></button>
          <h4>¿No tienes una cuenta? <Link className="redireccion" to="/SignUp">Crea una</Link></h4>
        </div>
      </div>
    );
}
 
export default LogIn;
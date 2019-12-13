import React from 'react';
import { Link } from "react-router-dom";
import Menu from "./elements/Menu";

function SignUp() {
    return (
      <div>
        <Menu/>
        <div className="content-signup">
          <h1>Crea tu usuario</h1>
          <div className="flex">
            <input type="text" placeholder="Nombre(s)"></input>
            <input type="text" placeholder="Apellido(s)"></input>
            <input type="number" placeholder="Peso (kg)"></input>
            <input type="number" placeholder="Estatura (metros)"></input>
            <input type="text" placeholder="Apodo"></input>
            <input type="password" placeholder="Contraseña"></input>
            <input type="date" placeholder="Fecha de Nacimiento"></input>
          </div>
          <button className="registrar"><Link className="link" to="/LogIn">Registrar</Link></button>
          <h4>¿Ya tienes una cuenta? <Link className="redireccion" to="/LogIn">inicia sesion</Link></h4>
        </div>
      </div>
    );
}
 
export default SignUp;
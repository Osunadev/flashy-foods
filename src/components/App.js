import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from "./Home";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Instrucciones from "./Instrucciones";
import primera from "./quiz/primera";
import segunda from "./quiz/segunda";
import tercera from "./quiz/tercera";
import Resultado from "./quiz/Resultado";
import "./scss/app.scss";
import "./scss/button.scss";
import "./scss/pages.scss";

function App(){
  return (
    <div>
        <HashRouter>
          <div className="home"><Route exact path="/" component={Home}/></div>
          <div className="login"><Route path="/LogIn" component={LogIn}/></div>
          <div className="signup"><Route path="/SignUp" component={SignUp}/></div>

          <div className="tarjeta"><Route path="/Instrucciones" component={Instrucciones}/></div>
          <div className="quiz"><Route path="/quiz/primera" component={primera}/></div>
          <div className="quiz"><Route path="/quiz/segunda" component={segunda}/></div>
          <div className="quiz"><Route path="/quiz/tercera" component={tercera}/></div>
          <div className="tarjeta"><Route path="/quiz/Resultado" component={Resultado}/></div>
        </HashRouter>
    </div>
  );
}

export default App;
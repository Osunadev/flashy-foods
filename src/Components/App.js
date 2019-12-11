import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Home from './Home.js';
import LogIn from './LogIn.js';
import SignUp from './SignUp.js';
import Instrucciones from './Instrucciones.js';
import './scss/App.scss';

function App() {
  return (
    <HashRouter>
      <Switch>
          <Route exact path="/Home" component={Home}/>
          <Route path="/LogIn" component={LogIn}/>
          <Route path="/SignUp" component={SignUp}/>
          <Route path="/Instrucciones" component={Instrucciones}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
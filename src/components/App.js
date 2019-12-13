import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Instrucciones from './Instrucciones';
import primera from './quiz/primera';
import segunda from './quiz/segunda';
import tercera from './quiz/tercera';
import Resultado from './quiz/Resultado';
import './scss/app.scss';
import './scss/button.scss';
import './scss/pages.scss';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/LogIn' component={LogIn} />
      <Route path='/SignUp' component={SignUp} />

      <Route path='/Instrucciones' component={Instrucciones} />
      <Route path='/quiz/primera' component={primera} />
      <Route path='/quiz/segunda' component={segunda} />
      <Route path='/quiz/tercera' component={tercera} />
      <Route path='/quiz/Resultado' component={Resultado} />
    </Switch>
  );
}

export default App;

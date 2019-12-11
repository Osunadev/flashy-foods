import React from 'react';
import Menu from './Menu.js';
import FormLogIn from './FormLogIn.js';

function LogIn() {
  return (
    <div className="container">
      <Menu />
      <div className="logIn">
        <FormLogIn />
      </div>
    </div>
  );
}

export default LogIn;
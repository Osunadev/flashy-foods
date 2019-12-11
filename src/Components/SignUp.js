import React from 'react';
import Menu from './Menu.js';
import FormSignUp from './FormSignUp.js';

function SignUp() {
  return (
    <div className="container">
      <Menu />
      <div className="signUp">
        <FormSignUp />
      </div>
    </div>
  );
}

export default SignUp;
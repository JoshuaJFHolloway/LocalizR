import React from 'react'
import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';

const LoginAndSignUpButtons = props => {
  return (
    <div>
      <LoginButton
        handleLoginButton = {props.handleLoginButton}
        name ={"Login"}
      />

      <SignUpButton
        handleSignUpButton = {props.handleSignUpButton}
        name ={"Sign up"}
      />
    </div>
  )
};

export default LoginAndSignUpButtons;
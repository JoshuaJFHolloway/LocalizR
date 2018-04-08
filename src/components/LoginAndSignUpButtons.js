import React from 'react'
import SubmitButton from './SubmitButton';
// import SignUpButton from './SignUpButton';

const LoginAndSignUpButtons = props => {
  return (
    <div>
      <SubmitButton
        handleDataSubmitted = {props.handleDataSubmitted} // use this.props when passing on props to another comp
        buttonName = {"Start"}
      />


    </div>
  )
};

export default LoginAndSignUpButtons;

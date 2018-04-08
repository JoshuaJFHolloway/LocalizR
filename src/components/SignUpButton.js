import React from 'react'

const SignUpButton = props => {
  return (
    <button id={"SignUpButton"} onClick={props.handleSignUpButton}> {props.name} </button>
  )
};

export default SignUpButton;

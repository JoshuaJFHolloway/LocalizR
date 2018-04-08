import React from 'react'

const LoginButton = props => {
  return (
    <button id={"LoginButton"} onClick={props.handleLoginButton}> {props.name} </button>
  )
};

export default LoginButton;

import React, { Component } from 'react';
import EmailInputUnit from './EmailInputUnit';
import PasswordInputUnit from './PasswordInputUnit';
import SubmitButton from './SubmitButton';

const LoginForm = (props) => {
  return (
    <div>
      <EmailInputUnit
        handleTextInput = {props.handleTextInput}
        value ={props.email}
        name={"Email"}
        input={"Email"}
      />
      <PasswordInputUnit
        handleTextInput = {props.handleTextInput}
        value ={props.password}
        name={"Password"}
        input={"Password"}
      />
      <SubmitButton
        handleDataSubmitted = {props.handleLoginSubmitted} // use this.props when passing on props to another comp
        buttonName = {"Submit"}
      />
    </div>
  )
};

export default LoginForm
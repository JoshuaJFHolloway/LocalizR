import React from 'react';
import UsernameInputUnit from './UsernameInputUnit';
import EmailInputUnit from './EmailInputUnit';
import PasswordInputUnit from './PasswordInputUnit';
import SubmitButton from './SubmitButton';

const SignUpForm = (props) => {
  return (
    <div>
      <UsernameInputUnit
        handleTextInput = {props.handleTextInput}
        value ={props.username}
        name={"Enter your username"}
        input={"Username"}
      />
      <EmailInputUnit
        handleTextInput = {props.handleTextInput}
        value ={props.email}
        name={"Enter your email"}
        input={"Email"}
      />
      <PasswordInputUnit
        handleTextInput = {props.handleTextInput}
        value ={props.password}
        name={"Enter your password"}
        input={"Password"}
      />
      <SubmitButton
        handleDataSubmitted = {props.handleDataSubmitted} // use this.props when passing on props to another comp
        buttonName = {"Submit"}
      />
    </div>
  )
};

export default SignUpForm
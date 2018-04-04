import React, { Component } from 'react';
import Headers from './Headers';
import UsernameInputUnit from './UsernameInputUnit';
import EmailInputUnit from './EmailInputUnit';
import PasswordInputUnit from './PasswordInputUnit';
import SubmitButton from './SubmitButton';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      dataSubmitted: false, // (will dictate whether next page loads)
      Username: null, // (this will be pushed to database)
      Email: null, // (this will be pushed to database)
      Password: null // (this will be pushed to database)
    };
  }

  //controlled and uncontrolled form fields - research it

    handleUsernameInput = event => {

      const target = event.target;
      const name = target.name;

      this.setState({
        [name]: target.value
      });
    };


    handleDataSubmitted = () => {
        this.setState({
          dataSubmitted: true
        });
      };


  render() {
    return (
      <div>
        <Headers/>
        <UsernameInputUnit
          handleUsernameInput = {this.handleUsernameInput}
          value ={this.state.Username}
          name={"Enter your username"}
          input={"Username"}
        />
        <EmailInputUnit
          handleUsernameInput = {this.handleUsernameInput}
          value ={this.state.Email}
          name={"Enter your email"}
          input={"Email"}
        />
        <PasswordInputUnit
          handleUsernameInput = {this.handleUsernameInput}
          value ={this.state.Password}
          name={"Enter your password"}
          input={"Password"}
        />
        <SubmitButton
          handleDataSubmitted = {this.handleDataSubmitted}
        />
      </div>
    );
  };
}

export default Form;
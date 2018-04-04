import React, { Component } from 'react';
import Headers from './Headers';
import UsernameInputUnit from './UsernameInputUnit';
import SubmitButton from './SubmitButton';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      dataSubmitted: false, // button clicked? (will dictate whether next page loads)
      Username: null, // null until person starts typing in box (this will be pushed to database)
      Email: null,
      Password: null
    };
  }

  //controlled and uncontrolled form fields - research it

    handleUsernameInput = event => {

      this.setState({Username: event.target.value});

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
        />
        {/*<UsernameInputUnit*/}
          {/*handleUsernameInput = {this.handleUsernameInput}*/}
        {/*/>*/}
        {/*<UsernameInputUnit*/}
          {/*handleUsernameInput = {this.handleUsernameInput}*/}
        {/*/>*/}
        <SubmitButton
          handleDataSubmitted = {this.handleDataSubmitted}
        />
      </div>
    );
  };
}

export default Form;
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

  //controlled and uncontrolled form fields research

    handleUsernameInput = event =>
      this.setState ({ Username: event.target.value });


    handleDataSubmitted = () => {

      // event is passed in this function still, its just not used, whenever onChange is called it creates an event but this event
      // is only needed in the prior function as we wanted to target the value, extract something from that component and use it. In this case we dont need that,
      // we just want to make sure that it has been clicked

      this.setState ({
        dataSubmitted: true,
      })
    };



  render() {
    return (
      <div>
        <Headers/>
        <UsernameInputUnit
          handleUsernameInput = {this.handleUsernameInput}
        />
        <SubmitButton
          handleDataSubmitted = {this.handleDataSubmitted}
        />
      </div>
    );
  };
}

export default Form;
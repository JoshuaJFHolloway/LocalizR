import React, { Component } from 'react';
import Headers from './Headers';
import UsernameInputUnit from './UsernameInputUnit';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      nameSubmitted: false, // button clicked? (will dictate whether next page loads)
      name: null // null until person starts typing in box (this will be pushed to database)
    };
  }

  //controlled and uncontrolled form fields research

    handleUsernameInput = event =>
      this.setState ({ name: event.target.value });


    handleUsernameSubmitted = () => {

      // event is passed in this function still, its just not used, whenever onChange is called it creates an event but this event
      // is only needed in the prior function as we wanted to target the value, extract something from that component and use it. In this case we dont need that,
      // we just want to make sure that it has been clicked

      this.setState ({
        nameSubmitted: true,
      })
    };



  render() {
    return (
      <div>
        <Headers/>
        <UsernameInputUnit
          handleUsernameInput = {this.handleUsernameInput}
          handleUsernameSubmitted = {this.handleUsernameSubmitted}
        />
      </div>
    );
  };
}

export default Form;
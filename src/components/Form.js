import React, { Component } from 'react';
import Headers from './Headers';
import NameInputUnit from './NameInputUnit';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      nameSubmitted: false, // button clicked?
      name: null // null until person starts typing in box
    };
  }

    handleNameInput = event =>
      this.setState ({ name: event.target.value });


    handleNameSubmitted = () => {
      this.setState ({
        nameSubmitted: true,
        name: this.state
      })
    };


  render() {
    return (
      <div>
        <Headers/>
        <NameInputUnit
          handleNameInput = {this.handleNameInput}
          handleNameSubmitted = {this.handleNameSubmitted}
        />
      </div>
    );
  };
}

export default Form;
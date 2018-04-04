import React, { Component } from 'react';
import Headers from './Headers';
import NameInputUnit from './NameInputUnit';
import Pagebox from './styledComponents/form.js'


class Form extends Component {
  constructor() {
    super();
    this.state = {
      nameSubmitted: false, // button clicked?
      name: null // null until button clicked to change state
    };
  }

    handleNameInput = event =>
      this.setState({ name: event.target.value });


    handleNameSubmitted = () => {
      this.setState({
        nameSubmitted: true,
        name: this.state
      })
    };


  render() {
    return (
      <Pagebox>
        <Headers/>
          <NameInputUnit
          handleNameInput = {this.handleNameInput}
          handleNameSubmitted = {this.handleNameSubmitted}
        />
      </Pagebox>
    );
  };
}

export default Form;
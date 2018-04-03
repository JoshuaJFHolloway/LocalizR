import React, { Component } from 'react';
import TextBoxes from './TextBoxes';

class Form extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <TextBoxes/>
      </div>
    );
  };
}

export default Form;
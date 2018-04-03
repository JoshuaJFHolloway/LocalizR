import React, { Component } from 'react';
import Headers from './Headers';
import NameInput from './NameInput';

class Form extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Headers/>
        <NameInput/>
      </div>
    );
  };
}

export default Form;
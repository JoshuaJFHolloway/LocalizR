import React, { Component } from 'react';
import Headers from './Headers';
import NameInputUnit from './NameInputUnit';

class Form extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Headers/>
        <NameInputUnit/>
      </div>
    );
  };
}

export default Form;
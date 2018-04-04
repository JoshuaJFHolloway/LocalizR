import React, { Component } from 'react';
import Form from './Form';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Form/>
        {VIEWS[this.decider()]}
      </div>
    )
  };
}

export default App;

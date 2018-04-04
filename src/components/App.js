import React, { Component } from 'react';
import Form from './Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataSubmitted: false
    }
  }

  handleDataSubmitted = () => {
    this.setState({
      dataSubmitted: true
    });
  };

  decider() {
    if (this.state.dataSubmitted === true) {
      return 'secondPage';
    } else return 'Form';
  }

  render() {
    return (
      <div>
        <Form
          handleDataSubmitted = {this.handleDataSubmitted}
        />
        {/*{VIEWS[this.decider()]}*/}
      </div>
    )
  };
}

export default App;

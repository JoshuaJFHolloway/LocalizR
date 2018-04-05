import React, { Component } from 'react';
import Form from './Form';
import SecondPage from './SecondPage';

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

  // remember to have checker that all text fields filled before submission

  decider() {
    if (this.state.dataSubmitted === true) {
      return 'SecondPage';
    } else return 'Form';
  }


  render() {

    const Views = {
      Form: (
        <Form
          handleDataSubmitted = {this.handleDataSubmitted}
        />
      ),
      SecondPage: <SecondPage/>
    };

    return (
      <div>
        {Views[this.decider()]}
      </div>
    )
  };
}

export default App;

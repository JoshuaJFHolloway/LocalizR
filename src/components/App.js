import React, { Component } from 'react';
import Form from './Form';
import SecondPage from './SecondPage';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      dataSubmitted: false,
    }
  }

  handleDataSubmitted = (user) => {
    if(this.textEntered() === true) {
      this.setState({
        dataSubmitted: true,
      });
       axios.post(this.props.url, user)
      .catch(err => {
        console.error(err);
      });
    }
  };


  decider() {
    if (this.state.dataSubmitted === true) {
      return 'SecondPage';
    } else return 'Form';
  }


  textEntered() {
    let Username = this.Form.state.Username;
    let Email = this.Form.state.Email;
    let Password = this.Form.state.Password;

    if(Username && Email && Password !== null) {
      return true
    }
  };


  render() {

    const Views = {
      Form: (
        <Form
          handleDataSubmitted = {this.handleDataSubmitted}

          ref={(Form) => {this.Form = Form;}}
          // If you want to access the state of a component's children, you can assign
          // a property called ref to each child. This property takes a callback function
          // that is passed a reference to the attached component.

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
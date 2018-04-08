import React, { Component } from 'react';
import Form from './Form';
import ChooseLanguage from './ChooseLanguage';
import axios from 'axios';
import Auth from '../Auth/Auth.js';


const auth = new Auth();

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataSubmitted: false,
    }

  }



  goTo(route) {
     this.props.history.replace(`/${route}`)
   }

   login() {
     auth.login();
   }

   logout() {
     auth.logout();
   }


  handleDataSubmitted = () => {
    // if(this.textEntered() === true) {
      this.setState({
        dataSubmitted: true,
      });
      const user = {username: this.Form.state.Username,
                    email: this.Form.state.Email,
                    password: this.Form.state.Password };
       axios.post(this.props.url, user)
      .catch(err => {
        console.error(err);
      });
    // }
  };

  handleLoginSubmitted = () => {
    if(this.loginDetailsEntered() === true) {
      this.setState({
        dataSubmitted: true,
      });
      const user = {username: this.Form.state.Username,
        email: this.Form.state.Email,
        password: this.Form.state.Password };
      axios.post(this.props.url, user)
        .catch(err => {
          console.error(err);
        });
    }
  };


  decider() {
    if (this.state.dataSubmitted === true) {
      return 'ChooseLanguage';
    } else return 'Form';
  }


  loginDetailsEntered() {
    let Email = this.Form.state.Email;
    let Password = this.Form.state.Password;

    if(Email && Password !== null) {
      return true
    }
  };


  textEntered() {
    let Username = this.Form.state.Username;
    let Email = this.Form.state.Email;
    let Password = this.Form.state.Password;

    if(Username && Email && Password !== null) {
      return true
    }
  };


  render() {

    // const { isAuthenticated } = this.props.auth;



    const Views = {
      Form: (
        <Form
          handleDataSubmitted = {this.handleDataSubmitted}
          handleLoginSubmitted ={this.handleLoginSubmitted}
          ref={(Form) => {this.Form = Form;}}

          // If you want to access the state of a component's children, you can assign
          // a property called ref to each child. This property takes a callback function
          // that is passed a reference to the attached component.

        />
      ),
      ChooseLanguage: <ChooseLanguage/>
    };

    return (
      <div>
      {
                // !isAuthenticated() && (
                    <button

                      onClick={this.login.bind(this)}
                    >
                      Log In
                    </button>
                  // )
              }
              {
                // isAuthenticated() && (
                    <button
                      onClick={this.logout.bind(this)}
                    >
                      Log Out
                    </button>
                  // )
              }

        {Views[this.decider()]}
      </div>
    )
  };
}

export default App;

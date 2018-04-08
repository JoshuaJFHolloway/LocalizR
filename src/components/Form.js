import React, { Component } from 'react';
import Headers from './Headers';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import LoginAndSignUpButtons from './LoginAndSignUpButtons';
import Auth from '../Auth/Auth.js';


const auth = new Auth();

class Form extends Component {
  constructor() {
    super();
    this.state = {
      // dataSubmitted: false, // (will dictate whether next page loads)
      Username: null, // (this will be pushed to database)
      Email: null, // (this will be pushed to database)
      Password: null, // (this will be pushed to database)
      LoginButtonPressed: null,
      SignUpButtonPressed: null
    };
  }

  //controlled and uncontrolled form fields - research it

  handleTextInput = event => {

      const target = event.target;
      const name = target.name;
      this.setState({
        [name]: target.value
      });
    };

  handleLoginButton = () => {
    this.setState({
      // LoginButtonPressed: true,
      dataSubmitted: true
    })
  };

  // handleSignUpButton = () => {
  //   this.setState({
  //     SignUpButtonPressed: true
  //   })
  // };


   login() {
     auth.login();
   }

   logout() {
     auth.logout();
   }

  decider() {
    if (this.state.LoginButtonPressed === true) {
      return 'LoginForm';
    } if (this.state.SignUpButtonPressed === true) {
      return 'SignUpForm'
    } else return 'LoginAndSignUpButtons';
  }


  render() {

    const Views = {
      // LoginForm: (
      //   <LoginForm
      //     handleLoginSubmitted = {this.props.handleLoginSubmitted}
      //     handleTextInput = {this.handleTextInput}
      //     username ={this.state.Username}
      //     email ={this.state.Email}
      //     password ={this.state.Password}
      //   />
      // ),
      // SignUpForm: (
      //   <SignUpForm
      //     handleDataSubmitted = {this.props.handleDataSubmitted}
      //     handleTextInput = {this.handleTextInput}
      //     username ={this.state.Username}
      //     email ={this.state.Email}
      //     password ={this.state.Password}
      //   />),
      LoginAndSignUpButtons: (
        <LoginAndSignUpButtons
        handleDataSubmitted = {this.props.handleDataSubmitted}

          handleLoginButton = {this.handleLoginButton}

      />
      )
    };



    return (
      <div>
        <Headers/>

        {
                  !auth.isAuthenticated() && (
                      <button

                        onClick={this.login.bind(this)}
                      >
                        Log In or Sign Up
                      </button>
                    )
                }
                {
                  auth.isAuthenticated() && (
                      <button
                        onClick={this.logout.bind(this)}
                      >
                        Log Out
                      </button>
                    )
                }

        {Views[this.decider()]}

        {/*<Login*/}
          {/*handleDataSubmitted = {this.props.handleDataSubmitted}*/}
          {/*handleTextInput = {this.handleTextInput}*/}
        {/*/>*/}

      </div>
    );
  };
}

export default Form;

import React, { Component } from 'react';
import Headers from './Headers';
import Auth from '../Auth/Auth.js';
import ChooseLanguage from './ChooseLanguage';
import Callback from '../Callback/Callback'
import { Route, Router } from 'react-router-dom';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {

  login() {
    auth.login();
    return (<Route path="/callback" render={(props) => {
      handleAuthentication(props);
      return <Callback {...props} />
    }}/>)
  }

  logout() {
    auth.logout();
  }

  render() {
    if (!auth.isAuthenticated()) {
      return (
        <div>
        <Headers/>
        <button onClick={this.login.bind(this)}>
            Log In or Sign Up
        </button>
        </div>)
    } else {
      return (
        <div>
        <button onClick={this.logout.bind(this)}>
          Log Out
        </button>
        <ChooseLanguage/>
        </div>
      )
    }
  };
}

export default App;

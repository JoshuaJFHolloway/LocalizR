import React, { Component } from 'react';
import Headers from './Headers';
import Auth from '../Auth/Auth.js';
import ChooseLanguage from './ChooseLanguage';
import Callback from '../Callback/Callback'
import { Route, Router } from 'react-router-dom';
import DefButton from './styledComponents/defButton.js';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

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
      return <div class="homebackground">
            <Headers />
            <DefButton onClick={this.login.bind(this)}>
              START YOUR JOURNEY
            </DefButton>
          </div>
        ;
    } else {
      return (
        <div class="quizbackground">
        <DefButton onClick={this.logout.bind(this)}>
          Log Out
        </DefButton>
        <ChooseLanguage/>
        </div>
      )
    }
  };
}
export default App;

import React, { Component } from 'react';
import Headers from './Headers';
import Auth from '../Auth/Auth.js';
import ChooseLanguage from './ChooseLanguage';
import Callback from '../Callback/Callback'
import { Route, Router } from 'react-router-dom';
import NavButton from './styledComponents/navButtons.js';

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
      return <div>
            <main>
            <Headers />
            <IndexButton onClick={this.login.bind(this)}>
              Start your journey
            </IndexButton>
            <NavButton onClick={this.login.bind(this)}>
              <i class="material-icons">airplanemode_active</i>
            </NavButton>
            </main>
          </div>
        ;
    } else {
      return (
        <div>
          <main>
            <QuizButton onClick={this.logout.bind(this)}>
              Log Out
            </QuizButton>
            <NavButton onClick={this.logout.bind(this)}>
              <i class="material-icons">airplanemode_inactive</i>
            </NavButton>
            <ChooseLanguage/>
        </main>
        </div>
      )
    }
  };
}
export default App;

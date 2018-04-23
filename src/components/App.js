import React, { Component } from 'react';
import Headers from './Headers';
import Auth from '../Auth/Auth.js';
import ChooseLanguage from './ChooseLanguage';
import Callback from './Callback';
import { Route } from 'react-router-dom';
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
      return (
      <div>
        <main>
          <img src="https://image.ibb.co/jGCwEx/la_logo.png" alt="flag" />
          <Headers/>
          <NavButton onClick={this.login}>
            <i class="material-icons">airplanemode_active</i>Login
          </NavButton>
        </main>
      </div>
      )

    } else {
      return (
        <div>
          <main>
            <NavButton onClick={this.logout}>
              <i class="material-icons">airplanemode_inactive</i>Logout
            </NavButton>
            <ChooseLanguage/>
          </main>
        </div>
      )
    }
  };
}

export default App;

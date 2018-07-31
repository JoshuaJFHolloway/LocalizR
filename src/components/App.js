import React, { Component } from 'react';
import Headers from './Headers';
import Auth from '../Auth/Auth.js';
import ChooseLanguage from './ChooseLanguage';
import Callback from './Callback';
import { Route } from 'react-router-dom';
import NavButton from './styledComponents/navButtons';
import Picture from './Picture';

const auth = new Auth();

const handleAuthentication = (nextState) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

class App extends Component {
  authenticator() {
    if (auth.isAuthenticated()) {
      return true;
    }
  }

  login() {
    auth.login();
    return (<Route path='/callback' render={(props) => {
      handleAuthentication(props);
      return <Callback {...props} />;
    }}/>);
  }

  logout() {
    auth.logout();
  }

  decider() {
    if (this.authenticator() !== true) {
      return 'Homepage';
    } else return 'LanguageList';
  }

  render() {

    const views = {
      Homepage: (
        <div>
          <main>
            <Picture flagImage ={'https://image.ibb.co/jGCwEx/la_logo.png'}/>
            <Headers/>
            <NavButton onClick={this.login}>
              <i className='material-icons'>airplanemode_active</i>Login
            </NavButton>
          </main>
        </div>
      ),

      LanguageList: (
        <div>
          <main>
            <NavButton onClick={this.logout}>
              <i className='material-icons'>airplanemode_inactive</i>Logout
            </NavButton>
            <ChooseLanguage/>
          </main>
        </div>
      )
    };

    return (
      <div>
        {views[this.decider()]}
      </div>
    );
  };
}

export default App;

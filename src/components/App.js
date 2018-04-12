import React, { Component } from 'react';
import Headers from './Headers';
import Auth from '../Auth/Auth.js';
import ChooseLanguage from './ChooseLanguage';
import Callback from '../Callback/Callback'
import { Route, Router } from 'react-router-dom';
import IndexButton from './styledComponents/indexButton.js';
import QuizButton from './styledComponents/quizButton.js';

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
            <ChooseLanguage/>
        </main>
        </div>
      )
    }
  };
}
export default App;

import React, { Component } from 'react';
import LanguageList from './LanguageList';
import Quiz from './Quiz';
import SpanishScenarios from './SpanishScenarios'


class ChooseLanguage extends Component {

  constructor(){
    super();
    this.state = {
      spanish: false,
      spanishScen: false,

    };
  };

  handlePictureClicked = () => {
    this.setState(prevState => ({
      spanish: !prevState.spanish
    }));
  };

  handleScenarioClicked = () => {
    this.setState({
      spanishScen: true,

    });
  };


  decider (){
      if(this.state.spanishScen === true && this.state.spanish === true) {
      return 'SpanishQuiz';
    } if(this.state.spanish === true) {
      return 'SpanishScenarios';
    } else return 'LanguageList';
  };

  render() {

    const quizViews = {
      SpanishScenarios: (
        <LanguageList
          handlePictureClicked = {this.handlePictureClicked}
          spanishScenarios = {<SpanishScenarios
            handleScenarioClicked = {this.handleScenarioClicked}
          />}
        />
      ),
      SpanishQuiz: (
        <Quiz/>
      ),
      LanguageList: (
        <LanguageList
          handlePictureClicked = {this.handlePictureClicked}
        />
      ),
    };

    return (
      <div>
      {quizViews[this.decider()]}
      </div>
    )
  };
}

export default ChooseLanguage;

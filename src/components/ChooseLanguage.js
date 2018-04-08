import React, { Component } from 'react';
import LanguageList from './LanguageList';
import SpanishQuiz from './SpanishQuiz';
import SpanishScenarios from './SpanishScenarios'


class ChooseLanguage extends Component {

  constructor(){
    super();
    this.state = {
      spanish: null,
      spanishScen1: null
    };
  };

  handlePictureClicked = () => {
    this.setState({
      spanish: true
    });
  };

  handleScenarioClicked = () => {
    this.setState({
      spanishScen1: true
    });
  };


  decider (){
      if(this.state.spanishScen1 === true && this.state.spanish === true) {
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
        <SpanishQuiz/>
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

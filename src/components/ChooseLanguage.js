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
      spanishScenario1: true
    });
  };


  decider (){
    if(this.state.spanish === true){
      return 'SpanishScenarios';
    } if(this.state.spanishScen1 === true) {
      return 'SpanishQuiz';
    } else return 'LanguageList';
  };

  render() {

    const quizViews = {
      LanguageList: (
        <LanguageList
          handlePictureClicked = {this.handlePictureClicked}
        />
      ),
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
      )
    };

    return (
      <div>
      {quizViews[this.decider()]}
      </div>
    )
  };
}

export default ChooseLanguage;

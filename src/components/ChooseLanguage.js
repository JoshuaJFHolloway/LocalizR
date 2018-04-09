import React, { Component } from 'react';
import LanguageList from './LanguageList';
import SpanishQuiz from './SpanishQuiz';
import SpanishScenarios from './SpanishScenarios'


class ChooseLanguage extends Component {

  constructor(){
    super();
    this.state = {
      spanish: false,
      spanishScen1: false,

    };
  };

  // handleRetryQuiz = () => {
  //   if(this.state.spanishScen1=== true){
  //
  //   }
  // };

  handleDataSubmitted = () => {
    this.setState(prevState => ({
      spanish: !prevState.spanish,
      spanishScen1: !prevState.spanishScen1
    }));
  };

  handlePictureClicked = () => {
    this.setState(prevState => ({
      spanish: !prevState.spanish
    }));
  };

  handleScenarioClicked = () => {
    this.setState({
      spanishScen1: true
    });
  };


  decider (){
      if((this.state.spanishScen1 === true && this.state.spanish === true) ||
        (this.state.spanishScen1 === true && this.state.spanish === false)) {
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
        <SpanishQuiz
          handleDataSubmitted = {this.handleDataSubmitted}
          handleRetryQuiz = {this.handlePictureClicked}
        />
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

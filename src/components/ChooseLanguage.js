import React, { Component } from 'react';
import LanguageList from './LanguageList';
import SpanishQuiz from './SpanishQuiz';

class ChooseLanguage extends Component {

  constructor(){
    super();
    this.state = {
      spanish: null
    };
  };

  handlePictureClicked = () => {
    this.setState({
      spanish: true
    });
  };

  decider (){
    if(this.state.spanish === true){
      return 'SpanishQuizDating'
    } else return 'LanguageList'
  };

  render() {

    const quizViews = {
      LanguageList: (
        <LanguageList
          handlePictureClicked = {this.handlePictureClicked}
        />
      ),
      SpanishQuizDating: <SpanishQuiz/>
    };

    return (
      <div>
      {quizViews[this.decider()]}
      </div>
    )
  };
}

export default ChooseLanguage;

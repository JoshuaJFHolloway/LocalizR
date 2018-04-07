import React, { Component } from 'react';
import SpanishQuizQ from './SpanishQuizQ';
import ResultsPage from './ResultsPage';


class SpanishQuiz extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      counter: 0,
      nextQuestion: false,
      lastQuestion: false,
    }
  }


  handleCorrectAnswerSubmitted = () => {
    this.setState({
      counter: this.state.counter + 1,
      score: this.state.score + 1
    })
  };



  handleAnswerSubmitted = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  };


  decider = () => {
    if (this.state.counter === 1) {
      return 'ResultsPage';
    } else return 'SpanishQuizQ';
  };



  render() {

    const Views = {
      ResultsPage: (
        <ResultsPage
          score = {this.state.score}
          />
      ),
      SpanishQuizQ: (
        <SpanishQuizQ
          handleAnswerSubmitted = {this.handleAnswerSubmitted}
          handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
        />
      )
    };

    return (
      <div>
        {Views[this.decider()]}
      </div>
    )
  }
}

export default SpanishQuiz;
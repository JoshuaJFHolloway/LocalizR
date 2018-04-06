import React, { Component } from 'react';
import SpanishQuizQ from './SpanishQuizQ';


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

  };



  render() {
    return (
      <SpanishQuizQ
        handleAnswerSubmitted = {this.handleAnswerSubmitted}
        handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
      />
    )
  }
}

export default SpanishQuiz;
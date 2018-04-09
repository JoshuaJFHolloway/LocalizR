import React, { Component } from 'react';
import QuizQ from './QuizQ';
import ChooseLanguage from './ChooseLanguage';
import ResultsPage from './ResultsPage';


class Quiz extends Component {
  constructor(props) {
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
    if (this.state.counter === 5) {
      return 'ResultsPage';
      } else if (this.state.counter === 1) {
        return 'QuizQ2';
      } else if (this.state.counter === 2){
        return 'QuizQ3';
      } else if (this.state.counter === 3){
        return 'QuizQ4'
      } else if (this.state.counter === 4){
        return 'QuizQ5'
      }
      else return 'QuizQ1';
    };



  render(props) {

    const Views = {
      ResultsPage: (
        <ResultsPage
          score = {this.state.score}
          />
      ),
        QuizQ1: (
          <QuizQ
            handleAnswerSubmitted = {this.handleAnswerSubmitted}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={this.props.scenario}
            picture={this.props.picture}
            question={this.props.question}
            answer1={this.props.answer1}
            correctAnswer={this.props.correctAnswer}
            answer2={this.props.answer2}
            answer3={this.props.answer2}
          />
        ),

        QuizQ2: (
          <QuizQ
            handleAnswerSubmitted = {this.handleAnswerSubmitted}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={this.props.scenario}
            picture={this.props.picture}
            question={this.props.question}
            answer1={this.props.answer1}
            correctAnswer={this.props.correctAnswer}
            answer2={this.props.answer2}
            answer3={this.props.answer2}
          />
        ),

        QuizQ3: (
          <QuizQ
            handleAnswerSubmitted = {this.handleAnswerSubmitted}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={this.props.scenario}
            picture={this.props.picture}
            question={this.props.question}
            answer1={this.props.answer1}
            correctAnswer={this.props.correctAnswer}
            answer2={this.props.answer2}
            answer3={this.props.answer2}
          />
        ),

        QuizQ4: (
          <QuizQ
            handleAnswerSubmitted = {this.handleAnswerSubmitted}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={this.props.scenario}
            picture={this.props.picture}
            question={this.props.question}
            answer1={this.props.answer1}
            correctAnswer={this.props.correctAnswer}
            answer2={this.props.answer2}
            answer3={this.props.answer2}
          />
        ),

        QuizQ5: (
          <QuizQ
            handleAnswerSubmitted = {this.handleAnswerSubmitted}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={this.props.scenario}
            picture={this.props.picture}
            question={this.props.question}
            answer1={this.props.answer1}
            correctAnswer={this.props.correctAnswer}
            answer2={this.props.answer2}
            answer3={this.props.answer2}
          />
        ),
    };

    return (
      <div>
        {Views[this.decider()]}
      </div>
    )
  }
}

export default Quiz;
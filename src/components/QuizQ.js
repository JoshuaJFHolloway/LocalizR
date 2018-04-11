import React, { Component } from 'react'
import QuizScenario from './QuizScenario';
import QuizPicture from './QuizPicture';
import QuizQuestion from './QuizQuestion';
import QuizAnswers from './QuizAnswers';

class QuizQ extends Component {
  constructor(){
    super()
  }
  render() {

    return (
      <div>
        <QuizScenario
          scenario={this.props.scenario}
        />
        <QuizPicture
          picture={this.props.picture}
        />
        <QuizQuestion
          question={this.props.question}
        />
        <QuizAnswers
          handleAnswerSubmitted={this.props.handleAnswerSubmitted}
          handleCorrectAnswerSubmitted={this.props.handleCorrectAnswerSubmitted}
          answer1={this.props.answer1}
          correctAnswer={this.props.correctAnswer}
          answer2={this.props.answer2}
          answer3={this.props.answer3}
        />
      </div>
    );
  }
}

export default QuizQ;
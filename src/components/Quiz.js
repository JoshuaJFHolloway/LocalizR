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
          handleDataSubmitted = {this.props.handleDataSubmitted}
          handleRetryQuiz = {this.props.handlePictureClicked}
          />
      ),
        QuizQ1: (
          <QuizQ
            handleAnswerSubmitted = {this.handleAnswerSubmitted}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={this.props.scenario1}
            picture={this.props.picture1}
            question={this.props.question1}
            answer1={this.props.answer1_1}
            correctAnswer={this.props.correctAnswer1}
            answer2={this.props.answer1_2}
            answer3={this.props.answer1_3}
          />
        ),

        QuizQ2: (
          <QuizQ
            handleAnswerSubmitted = {this.handleAnswerSubmitted}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={this.props.scenario2}
            picture={this.props.picture2}
            question={this.props.question2}
            answer1={this.props.answer2_1}
            correctAnswer={this.props.correctAnswer2}
            answer2={this.props.answer2_2}
            answer3={this.props.answer2_3}
          />
        ),

        QuizQ3: (
          <QuizQ
            handleAnswerSubmitted = {this.handleAnswerSubmitted}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={this.props.scenario3}
            picture={this.props.picture3}
            question={this.props.question3}
            answer1={this.props.answer3_1}
            correctAnswer={this.props.correctAnswer3}
            answer2={this.props.answer3_2}
            answer3={this.props.answer3_3}
          />
        ),

        QuizQ4: (
          <QuizQ
            handleAnswerSubmitted = {this.handleAnswerSubmitted}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={this.props.scenario4}
            picture={this.props.picture4}
            question={this.props.question4}
            answer1={this.props.answer4_1}
            correctAnswer={this.props.correctAnswer4}
            answer2={this.props.answer4_2}
            answer3={this.props.answer4_3}
          />
        ),

        QuizQ5: (
          <QuizQ
            handleAnswerSubmitted = {this.handleAnswerSubmitted}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={this.props.scenario5}
            picture={this.props.picture5}
            question={this.props.question5}
            answer1={this.props.answer5_1}
            correctAnswer={this.props.correctAnswer5}
            answer2={this.props.answer5_2}
            answer3={this.props.answer5_3}
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
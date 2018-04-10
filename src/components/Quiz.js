import React, { Component } from 'react';
import QuizQ from './QuizQ';
import ChooseLanguage from './ChooseLanguage';
import ResultsPage from './ResultsPage';
import axios from 'axios';


class Quiz extends Component {
  constructor(props) {
    super();
    this.state = {
      score: 0,
      counter: 0,
      nextQuestion: false,
      lastQuestion: false,
      results: null
    }
  }

  concatenateAnswer1 = () => {
    var string = 'this.props.answer' + (this.state.counter + 1) + "_" + 1
    return eval(string)
  };

  concatenateAnswer2 = () => {
    var string = 'this.props.answer' + (this.state.counter + 1) + "_" + 2
    return eval(string)
  };

  concatenateAnswer3 = () => {
    var string = 'this.props.answer' + (this.state.counter + 1) + "_" + 3
    return eval(string)
  };


  concatenateCorrectAnswer = () => {
    var string = 'this.props.correctAnswer' + (this.state.counter + 1)
    return eval(string)
  };

  handleAnswerSubmitted1 = () => {
    this.setState({
      counter: this.state.counter + 1
    })
    axios.post('http://localhost:3001/api/scenario', {
      user_answer: this.concatenateAnswer1(),
      correct_answer: this.concatenateCorrectAnswer()
    })
    .then(function (res) {
  console.log(res);
})
.catch(function (err) {
  console.log(err);
});
  };


  handleAnswerSubmitted2 = () => {
    this.setState({
      counter: this.state.counter + 1
    })
    axios.post('http://localhost:3001/api/scenario', {
      user_answer: this.concatenateAnswer2(),
      correct_answer: this.concatenateCorrectAnswer()
    })
    .then(function (res) {
  console.log(res);
})
.catch(function (err) {
  console.log(err);
});
  };

  handleAnswerSubmitted3 = () => {
    this.setState({
      counter: this.state.counter + 1
    })
    axios.post('http://localhost:3001/api/scenario', {
      user_answer: this.concatenateAnswer3(),
      correct_answer: this.concatenateCorrectAnswer()
    })
    .then(function (res) {
  console.log(res);
})
.catch(function (err) {
  console.log(err);
});
  };

  handleCorrectAnswerSubmitted = () => {
    this.setState({
      counter: this.state.counter + 1,
      score: this.state.score + 1
    })
    axios.post('http://localhost:3001/api/scenario', {
      user_answer: this.concatenateCorrectAnswer(),
      correct_answer: this.concatenateCorrectAnswer()
    })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
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
          handleAnswerSubmitted1 = {this.handleAnswerSubmitted1}
          handleAnswerSubmitted2 = {this.handleAnswerSubmitted2}
          handleAnswerSubmitted3 = {this.handleAnswerSubmitted3}
          handleRetryQuiz = {this.props.handlePictureClicked}
          />
      ),
        QuizQ1: (
          <QuizQ
            handleAnswerSubmitted1 = {this.handleAnswerSubmitted1}
            handleAnswerSubmitted2 = {this.handleAnswerSubmitted2}
            handleAnswerSubmitted3 = {this.handleAnswerSubmitted3}
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
          handleAnswerSubmitted1 = {this.handleAnswerSubmitted1}
          handleAnswerSubmitted2 = {this.handleAnswerSubmitted2}
          handleAnswerSubmitted3 = {this.handleAnswerSubmitted3}
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
          handleAnswerSubmitted1 = {this.handleAnswerSubmitted1}
          handleAnswerSubmitted2 = {this.handleAnswerSubmitted2}
          handleAnswerSubmitted3 = {this.handleAnswerSubmitted3}
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
          handleAnswerSubmitted1 = {this.handleAnswerSubmitted1}
          handleAnswerSubmitted2 = {this.handleAnswerSubmitted2}
          handleAnswerSubmitted3 = {this.handleAnswerSubmitted3}
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
          handleAnswerSubmitted1 = {this.handleAnswerSubmitted1}
          handleAnswerSubmitted2 = {this.handleAnswerSubmitted2}
          handleAnswerSubmitted3 = {this.handleAnswerSubmitted3}
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

import React, { Component } from 'react';
import QuizQ from './QuizQ';
import ResultsPage from './ResultsPage';
import axios from 'axios';


class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      counter: 0,
      results: null
    }
  }

  concatenateAnswer1 = () => {
    var string = 'this.props.answer' + (this.state.counter) + "_" + 1
    return eval(string)
  };

  concatenateAnswer2 = () => {
    var string = 'this.props.answer' + (this.state.counter) + "_" + 2
    return eval(string)
  };

  concatenateAnswer3 = () => {
    var string = 'this.props.answer' + (this.state.counter) + "_" + 3
    return eval(string)
  };

  concatenateCorrectAnswer = () => {
    var string = 'this.props.correctAnswer' + (this.state.counter)
    return eval(string)
  };

  handleAnswerSubmitted1 = () => {
    this.setState({
      counter: this.state.counter + 1
    });

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


    if(this.state.counter + 1 == 1){
      axios.delete('http://localhost:3001/api/scenario')
        .then(res => {
          console.log('Cleaned database');
        })
        .catch(err => {
          console.log(err)
        })
    }
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
    if(this.state.counter + 1 == 1){
      axios.delete('http://localhost:3001/api/scenario')
        .then(res => {
          console.log('Cleaned database');
        })
        .catch(err => {
          console.log(err)
        })
    }

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
    if (this.state.counter === 8) {
      return 'ResultsPage';
      } else if (this.state.counter === 1) {
        return 'QuizQ2'
      } else if (this.state.counter === 2){
        return 'QuizQ3';
      } else if (this.state.counter === 3){
        return 'QuizQ4'
      } else if (this.state.counter === 4){
        return 'QuizQ5'
      } else if (this.state.counter === 5){
        return 'QuizQ6'
      } else if (this.state.counter === 6){
        return 'QuizQ7'
      } else if (this.state.counter === 7){
        return 'QuizQ8'
      }
      else return 'QuizQ1';
    };



  render() {

    const Views = {
      ResultsPage: (
        <ResultsPage
          score = {this.state.score}
          handleDataSubmitted = {this.props.handleDataSubmitted}
          handleAnswerSubmitted1 = {this.handleAnswerSubmitted1}
          handleAnswerSubmitted2 = {this.handleAnswerSubmitted2}
          handleAnswerSubmitted3 = {this.handleAnswerSubmitted3}
          handleRetryQuiz = {this.props.handlePictureClicked}
          />
      ),
        QuizQ1: (
          <QuizQ
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            handleAnswerSubmitted1 = {this.handleAnswerSubmitted1}
            handleAnswerSubmitted2 = {this.handleAnswerSubmitted2}
            handleAnswerSubmitted3 = {this.handleAnswerSubmitted3}
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

        QuizQ6: (
          <QuizQ
            handleAnswerSubmitted1 = {this.handleAnswerSubmitted1}
            handleAnswerSubmitted2 = {this.handleAnswerSubmitted2}
            handleAnswerSubmitted3 = {this.handleAnswerSubmitted3}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={this.props.scenario6}
            picture={this.props.picture6}
            question={this.props.question6}
            answer1={this.props.answer6_1}
            correctAnswer={this.props.correctAnswer6}
            answer2={this.props.answer6_2}
            answer3={this.props.answer6_3}
          />
        ),
        QuizQ7: (
          <QuizQ
            handleAnswerSubmitted1 = {this.handleAnswerSubmitted1}
            handleAnswerSubmitted2 = {this.handleAnswerSubmitted2}
            handleAnswerSubmitted3 = {this.handleAnswerSubmitted3}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={this.props.scenario7}
            picture={this.props.picture7}
            question={this.props.question7}
            answer1={this.props.answer7_1}
            correctAnswer={this.props.correctAnswer7}
            answer2={this.props.answer7_2}
            answer3={this.props.answer7_3}
          />
        ),

        QuizQ8: (
          <QuizQ
            handleAnswerSubmitted1 = {this.handleAnswerSubmitted1}
            handleAnswerSubmitted2 = {this.handleAnswerSubmitted2}
            handleAnswerSubmitted3 = {this.handleAnswerSubmitted3}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={this.props.scenario8}
            picture={this.props.picture8}
            question={this.props.question8}
            answer1={this.props.answer8_1}
            correctAnswer={this.props.correctAnswer8}
            answer2={this.props.answer8_2}
            answer3={this.props.answer8_3}
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

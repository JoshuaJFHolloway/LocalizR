import React, { Component } from 'react';
import SubmitButton from './SubmitButton'

class QuizAnswers extends Component {
  constructor() {
    super();

    this.state = {
      answers: [],
      styles: [],
    };
  }

  componentDidMount() {
    this.randomiseAnswers();
  };

  randomiseAnswers = () => {
    let array = [this.props.answer1, this.props.answer2, this.props.answer3, this.props.correctAnswer];

    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    this.setState({
      answers: array,
    });

    this.correctAnswerIndex = array.findIndex(answer => answer === this.props.correctAnswer);
    this.incorrectAnswerIndex1 = array.findIndex(answer => answer === this.props.answer1);
    this.incorrectAnswerIndex2 = array.findIndex(answer => answer === this.props.answer2);
    this.incorrectAnswerIndex3 = array.findIndex(answer => answer === this.props.answer3);
    this.resetStyles();
  };

  resetStyles = () => {
    const styles = [];

    for (let i = 0; i < 4; i += 1) {
      styles[i] = {
        backgroundColor: '',
      };
    }

    this.setState({
      styles: styles,
    });
  };

  highlightCorrectAnswer = (index) => {
    const styles = this.state.styles;

    styles[index] = {
      backgroundColor: 'green',
    };

    this.setState({
      styles: styles,
    });
  };

  highlightIncorrectAnswer = (index) => {
      const styles = this.state.styles;

      styles[index] = {
          backgroundColor: 'red',
      };

      this.setState({
          styles: styles,
      });
  };

  onButtonClicked = (buttonIndex) => {
      this.highlightCorrectAnswer(this.correctAnswerIndex);
      this.highlightIncorrectAnswer(this.incorrectAnswerIndex1);
      this.highlightIncorrectAnswer(this.incorrectAnswerIndex2);
      this.highlightIncorrectAnswer(this.incorrectAnswerIndex3);

    setTimeout(() => {
      if (buttonIndex === this.correctAnswerIndex) {
        this.props.handleCorrectAnswerSubmitted();
      }
      if (buttonIndex === this.incorrectAnswerIndex1) {
        this.props.handleAnswerSubmitted1();
      }
      if (buttonIndex === this.incorrectAnswerIndex2) {
        this.props.handleAnswerSubmitted2();
      }
      if (buttonIndex === this.incorrectAnswerIndex3) {
        this.props.handleAnswerSubmitted3();
      }
      this.randomiseAnswers();
    }, 2000);
  };

  render() {

    return (
      <div>
        <SubmitButton
          buttonName={this.state.answers[0]}
          style={this.state.styles[0]}
          handleDataSubmitted={() => this.onButtonClicked(0)}
        />
        <SubmitButton
          buttonName={this.state.answers[1]}
          style={this.state.styles[1]}
          handleDataSubmitted={() => this.onButtonClicked(1)}
        />
        <SubmitButton
          buttonName={this.state.answers[2]}
          style={this.state.styles[2]}
          handleDataSubmitted={() => this.onButtonClicked(2)}
        />
        <SubmitButton
          buttonName={this.state.answers[3]}
          style={this.state.styles[3]}
          handleDataSubmitted={() => this.onButtonClicked(3)}
        />
      </div>
    )
  };
}

export default QuizAnswers;

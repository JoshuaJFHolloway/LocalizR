import React, { Component } from 'react';
// import QuizAnswer from './QuizAnswer'
// import QuizCorrectAnswer from './QuizCorrectAnswer'
import SubmitButton from './SubmitButton'

  class QuizAnswers extends Component {
    constructor(){
      super();
    }

    randomiser = (array= [1,2,3,4]) => {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
        var num1 = array[0];
        return [num1];
      };

    decider = () => {
      var values = this.randomiser();
        if(values[0] === 1){
          return 'Here1'
        } if(values[0] === 2){
          return 'Here2'
      } if(values[0] === 3){
        return 'Here3'
      } if(values[0] === 4){
        return 'Here4'
      }
    };

    render() {

      const Views = {
        Here1: (
          <div>
            <SubmitButton
              answer1={this.props.answer1}
              handleDataSubmitted={this.props.handleAnswerSubmitted}
            />
            <SubmitButton
              answer2={this.props.answer2}
              handleDataSubmitted={this.props.handleAnswerSubmitted}
            />
            <SubmitButton
              answer3={this.props.answer3}
              handleDataSubmitted={this.props.handleAnswerSubmitted}
            />
            <SubmitButton
              answer4={this.props.answer4}
              handleDataSubmitted={this.props.handleCorrectAnswerSubmitted}
            />
          </div>
        ),

        Here2: (
          <div>
            <SubmitButton
              answer1={this.props.answer1}
              handleDataSubmitted={this.props.handleAnswerSubmitted}
            />
            <SubmitButton
              answer2={this.props.answer2}
              handleDataSubmitted={this.props.handleAnswerSubmitted}
            />
            <SubmitButton
              answer4={this.props.answer4}
              handleDataSubmitted={this.props.handleCorrectAnswerSubmitted}
            />
            <SubmitButton
              answer3={this.props.answer3}
              handleDataSubmitted={this.props.handleAnswerSubmitted}
            />
          </div>
        ),

        Here3: (
          <div>
            <SubmitButton
              answer1={this.props.answer1}
              handleDataSubmitted={this.props.handleAnswerSubmitted}
            />
            <SubmitButton
              answer4={this.props.answer4}
              handleDataSubmitted={this.props.handleCorrectAnswerSubmitted}
            />
            <SubmitButton
              answer2={this.props.answer2}
              handleDataSubmitted={this.props.handleAnswerSubmitted}
            />
            <SubmitButton
              answer3={this.props.answer3}
              handleDataSubmitted={this.props.handleAnswerSubmitted}
            />
          </div>
        ),

        Here4: (
          <div>
            <SubmitButton
              answer4={this.props.answer4}
              handleDataSubmitted={this.props.handleCorrectAnswerSubmitted}
            />
            <SubmitButton
              answer1={this.props.answer1}
              handleDataSubmitted={this.props.handleAnswerSubmitted}
            />
            <SubmitButton
              answer2={this.props.answer2}
              handleDataSubmitted={this.props.handleAnswerSubmitted}
            />
            <SubmitButton
              answer3={this.props.answer3}
              handleDataSubmitted={this.props.handleAnswerSubmitted}
            />
          </div>
        )
      };

      return (
        <div>
          {Views[this.decider()]}
        </div>
      )
    };
}

export default QuizAnswers;

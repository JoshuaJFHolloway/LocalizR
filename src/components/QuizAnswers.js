import React, { Component } from 'react';
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
          return 'Selection1'
        } if(values[0] === 2){
          return 'Selection2'
      } if(values[0] === 3){
        return 'Selection3'
      } if(values[0] === 4){
        return 'Selection4'
      }
    };

    render() {

      const Views = {
        Selection1: (
          <div>
            <SubmitButton
              buttonName={this.props.answer1}
              handleDataSubmitted={this.props.handleAnswerSubmitted}
            />
            <SubmitButton
              buttonName={this.props.answer2}
              handleDataSubmitted={this.props.handleAnswerSubmitted}
            />
            <SubmitButton
              buttonName={this.props.answer3}
              handleDataSubmitted={this.props.handleAnswerSubmitted}
            />
            <SubmitButton
              buttonName={this.props.answer4}
              handleDataSubmitted={this.props.handleCorrectAnswerSubmitted}
            />
          </div>
        ),

        Selection2: (
          <div>
            <SubmitButton
              buttonName={this.props.answer1}
              handleDataSubmitted={this.props.handleAnswerSubmitted}
            />
            <SubmitButton
              buttonName={this.props.answer2}
              handleDataSubmitted={this.props.handleAnswerSubmitted}
            />
            <SubmitButton
              buttonName={this.props.answer4}
              handleDataSubmitted={this.props.handleCorrectAnswerSubmitted}
            />
            <SubmitButton
              buttonName={this.props.answer3}
              handleDataSubmitted={this.props.handleAnswerSubmitted}
            />
          </div>
        ),

        Selection3: (
          <div>
            <SubmitButton
              buttonName={this.props.answer1}
              handleDataSubmitted={this.props.handleAnswerSubmitted}
            />
            <SubmitButton
              buttonName={this.props.answer4}
              handleDataSubmitted={this.props.handleCorrectAnswerSubmitted}
            />
            <SubmitButton
              buttonName={this.props.answer2}
              handleDataSubmitted={this.props.handleAnswerSubmitted}
            />
            <SubmitButton
              buttonName={this.props.answer3}
              handleDataSubmitted={this.props.handleAnswerSubmitted}
            />
          </div>
        ),

        Selection4: (
          <div>
            <SubmitButton
              buttonName={this.props.answer4}
              handleDataSubmitted={this.props.handleCorrectAnswerSubmitted}
            />
            <SubmitButton
              buttonName={this.props.answer1}
              handleDataSubmitted={this.props.handleAnswerSubmitted}
            />
            <SubmitButton
              buttonName={this.props.answer2}
              handleDataSubmitted={this.props.handleAnswerSubmitted}
            />
            <SubmitButton
              buttonName={this.props.answer3}
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

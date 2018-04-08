import React from 'react';

const QuizCorrectAnswer = props => {
  return (
    <div>
      <button id={"submitButton"} onClick={props.handleCorrectAnswerSubmitted}> {props.correctAnswer}</button>
    </div>
  )
};

export default QuizCorrectAnswer;
import React from 'react';

const QuizAnswer = props => {
  return (
    <div>
      <button>id={"submitButton"} onClick={props.handleAnswerSubmitted}> {props.answer}</button>
    </div>
  )
};

export default QuizAnswer;

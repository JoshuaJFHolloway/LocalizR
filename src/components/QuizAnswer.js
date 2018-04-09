import React from 'react';

const QuizAnswer = props => {
  return (
  <div>
    <div>
      <button id={"submitButton1"} onClick={props.handleAnswerSubmitted1}> {props.answer1}</button>
    </div>
    <div>
      <button id={"submitButton2"} onClick={props.handleAnswerSubmitted2}> {props.answer2}</button>
    </div>
    <div>
      <button id={"submitButton3"} onClick={props.handleAnswerSubmitted3}> {props.answer3}</button>
    </div>
   </div>
  )
};

export default QuizAnswer;

import React from 'react';

const QuizAnswer = props => {
  return (
  <div>  
    <div>
      <button id={"submitButton"} onClick={props.handleAnswerSubmitted}> {props.answer1}</button>
    </div>
    <div>  
      <button id={"submitButton"} onClick={props.handleAnswerSubmitted}> {props.answer2}</button>
    </div>
    <div>  
      <button id={"submitButton"} onClick={props.handleAnswerSubmitted}> {props.answer3}</button>
    </div>
   </div> 
  )
};

export default QuizAnswer;

import React from 'react';
import QuizAnswer from './QuizAnswer'
import QuizCorrectAnswer from './QuizCorrectAnswer'

const QuizAnswers = (props) => {
  return (
    <div>
      <QuizAnswer
        answer1={props.answer1}
        answer2={props.answer2}
        answer3={props.answer3}
        handleAnswerSubmitted = {props.handleAnswerSubmitted}
      />
      <QuizCorrectAnswer
        correctAnswer={props.correctAnswer}
        handleCorrectAnswerSubmitted = {props.handleCorrectAnswerSubmitted}
      />
      {/* <QuizAnswer
        answer2={props.answer2}
        handleAnswerSubmitted = {props.handleAnswerSubmitted}
      /> */}
      {/* <QuizAnswer
        answer={props.answer}
        handleAnswerSubmitted = {props.handleAnswerSubmitted}
      /> */}
    </div>

  )
};

export default QuizAnswers;

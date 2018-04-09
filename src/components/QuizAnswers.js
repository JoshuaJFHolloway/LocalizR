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
        handleAnswerSubmitted1 = {props.handleAnswerSubmitted1}
        handleAnswerSubmitted2 = {props.handleAnswerSubmitted2}
        handleAnswerSubmitted3 = {props.handleAnswerSubmitted3}
      />
      <QuizCorrectAnswer
        correctAnswer={props.correctAnswer}
        handleCorrectAnswerSubmitted = {props.handleCorrectAnswerSubmitted}
      />

    </div>

  )
};

export default QuizAnswers;

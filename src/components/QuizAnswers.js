import React from 'react';
import QuizAnswer from './QuizAnswer'
import QuizCorrectAnswer from './QuizCorrectAnswer'

const QuizAnswers = (props) => {
  return (
    <div>
      <QuizAnswer
        answer ={'el vestido rojo'}
        handleAnswerSubmitted = {props.handleAnswerSubmitted}
      />
      <QuizCorrectAnswer
        answer ={'el traje rojo'}
        handleCorrectAnswerSubmitted = {props.handleCorrectAnswerSubmitted}
      />
      <QuizAnswer
        answer ={'el abrigo rojo'}
        handleAnswerSubmitted = {props.handleAnswerSubmitted}
      />
      <QuizAnswer
        answer ={  'los pantalones rojos'}
        handleAnswerSubmitted = {props.handleAnswerSubmitted}
      />
    </div>

  )
};

export default QuizAnswers;

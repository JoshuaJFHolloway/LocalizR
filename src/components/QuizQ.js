import React from 'react'
import QuizScenario from './QuizScenario';
import QuizPicture from './QuizPicture';
import QuizQuestion from './QuizQuestion';
import QuizAnswers from './QuizAnswers';

const QuizQ = props => {
  return (
    <div>
      <QuizScenario
        scenario={props.scenario}
      />
      <QuizPicture
        picture={props.picture}
      />
      <QuizQuestion
        question={props.question}
      />
      <QuizAnswers
        handleAnswerSubmitted1 = {props.handleAnswerSubmitted1}
        handleAnswerSubmitted2 = {props.handleAnswerSubmitted2}
        handleAnswerSubmitted3 = {props.handleAnswerSubmitted3}
        handleCorrectAnswerSubmitted = {props.handleCorrectAnswerSubmitted}
        answer1={props.answer1}
        correctAnswer={props.correctAnswer}
        answer2={props.answer2}
        answer3={props.answer3}
      />
    </div>
  )
};

export default QuizQ;

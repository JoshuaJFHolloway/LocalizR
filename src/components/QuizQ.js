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
        handleAnswerSubmitted = {props.handleAnswerSubmitted}
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
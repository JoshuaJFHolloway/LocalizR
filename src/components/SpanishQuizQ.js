import React from 'react'
import QuizScenario from './QuizScenario';
import QuizPicture from './QuizPicture';
import QuizQuestion from './QuizQuestion';
import QuizAnswers from './QuizAnswers';

const SpanishQuizQ = props => {
  return (
    <div>
      <QuizScenario
        scenario={"You choose to wear this for your date"}
      />
      <QuizPicture
        picture={"https://www.opposuits.co.uk/media/catalog/product/cache/1/image/550x/925f46717e92fbc24a8e2d03b22927e1/s/s/ss_reddevil-lifestyle-01.jpg"}
      />
      <QuizQuestion
        question={"Which of these is your suit?"}
      />
      <QuizAnswers
        handleAnswerSubmitted = {props.handleAnswerSubmitted}
        handleCorrectAnswerSubmitted = {props.handleCorrectAnswerSubmitted}
      />
    </div>
  )
};

export default SpanishQuizQ;
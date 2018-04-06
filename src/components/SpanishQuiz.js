import React, { Component } from 'react';
import QuizScenario from './QuizScenario';
import QuizPicture from './QuizPicture';
import QuizQuestion from './QuizQuestion';
import QuizAnswers from './QuizAnswers';

class SpanishQuiz extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      nextQuestion: false,
      lastQuestion: false,
    }
  }


  handleAnswerSubmitted = () => {



  };



  render() {
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
        />
      </div>
    )
  }
}

export default SpanishQuiz;
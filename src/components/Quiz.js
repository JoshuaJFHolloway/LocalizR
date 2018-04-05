import React, { Component } from 'react';
import QuizScenario from './QuizScenario';
import QuizPicture from './QuizPicture';
import QuizQuestion from './QuizQuestion';
import QuizAnswer from './QuizAnswer';

const Quiz = () => {
  return (
    <div>
      <QuizScenario />
      <QuizPicture />
      <QuizQuestion />
      <QuizAnswer />
    </div>
  )
};

export default Quiz;

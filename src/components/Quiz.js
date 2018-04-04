import React, { Component } from 'react';
import QuizScenario from './QuizScenario';
import QuizPicture from './QuizPicture';

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

import React, { Component } from 'react';
import QuizScenario from './QuizScenario';

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

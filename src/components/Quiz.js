import React, { Component } from 'react';
import QuizScenario from './QuizScenario';
import QuizPicture from './QuizPicture';
import QuizAnswer from './QuizAnswer';

const Quiz = () => {
  return (
    <div>
      <QuizScenario />
      <QuizPicture />
      <QuizAnswer />
    </div>
  )
};

export default Quiz;

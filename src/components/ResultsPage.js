import React from 'react'
import SubHeader from './SubHeader'
import SubmitButton from "./SubmitButton";
import axios from 'axios';
import Story from "./Story";


// function to drop database

const ResultsPage = props => {

  return (
    <div>
      <SubHeader
        subHeader={"Nice one, your score is " + props.score}/>
      <SubmitButton
        buttonName = {"Languages Page"}
        handleDataSubmitted = {props.handleDataSubmitted}
      />
      <SubmitButton
        buttonName = {"Retry Quiz"}
        handleDataSubmitted = {props.handleRetryQuiz}
      />
      <Story />
    </div>
  )
};

export default ResultsPage;

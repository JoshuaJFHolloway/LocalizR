import React from 'react'
import SubHeader from './SubHeader'
import SubmitButton from './SubmitButton';
import DefButton from './styledComponents/defButton.js';

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
    </div>
  )
};

export default ResultsPage;

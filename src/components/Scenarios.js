import React from 'react'
import SubmitButton from './SubmitButton'

const Scenarios = props => {
  return (
    <div>
    <SubmitButton
      buttonName = {props.buttonName1}
      handleDataSubmitted = {props.handleScenario1Clicked}
    />
    <SubmitButton
      buttonName = {props.buttonName2}
      handleDataSubmitted = {props.handleScenario2Clicked}
    />
    </div>
  );
};

export default Scenarios;
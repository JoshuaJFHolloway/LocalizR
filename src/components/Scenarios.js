import React from 'react'
import SubmitButton from './SubmitButton'
import SubHeader from './SubHeader'

const Scenarios = props => {
  return (
    <div>
      <SubHeader
        subHeader = {"Choose your scenario"}
      />
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

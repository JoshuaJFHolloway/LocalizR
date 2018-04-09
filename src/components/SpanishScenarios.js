import React from 'react'
import SubmitButton from './SubmitButton'

const SpanishScenarios = props => {
  return (
    <div>
    <SubmitButton
      buttonName = {"Spanish Scenario 1"}
      handleDataSubmitted = {props.handleScenario1Clicked}
    />
    <SubmitButton
      buttonName = {"Spanish Scenario 2"}
      handleDataSubmitted = {props.handleScenario2Clicked}
    />
    </div>
  );
};

export default SpanishScenarios;
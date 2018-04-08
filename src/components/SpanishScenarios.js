import React from 'react'
import SubmitButton from './SubmitButton'

const SpanishScenarios = props => {
  return (
    <div>
    <SubmitButton
      buttonName = {"Spanish Scenario 1"}
      handleDataSubmitted = {props.handleScenarioClicked}
    />
    <SubmitButton
      buttonName = {"Spanish Scenario 2"}
      handleDataSubmitted = {props.handleScenarioClicked}
    />
    </div>
  );
};

export default SpanishScenarios;
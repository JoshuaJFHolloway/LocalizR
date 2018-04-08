import React from 'react'
import SubmitButton from './SubmitButton'

const SpanishScenarios = props => {
  return (
    <SubmitButton
      buttonName = {"Spanish Scenario 1"}
      handleDataSubmitted = {props.handleScenarioClicked}
    />
  )
};

export default SpanishScenarios;
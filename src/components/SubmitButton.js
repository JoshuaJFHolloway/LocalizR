import React from 'react';

const SubmitButton = props => {
  return (
    <button id={"submitButton"} onClick={props.handleDataSubmitted}> Submit </button>
  );
};

export default SubmitButton;
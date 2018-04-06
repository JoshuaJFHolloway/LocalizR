import React from 'react';

const SubmitButton = props => {
  return (
    <button id={"submitButton"} onClick={props.handleDataSubmitted}> {props.buttonName} </button>
  );
};

export default SubmitButton;
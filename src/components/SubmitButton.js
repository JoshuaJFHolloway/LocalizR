import React from 'react';
import Button from './styledComponents/submitButton';

const SubmitButton = props => {
  return (
      <button className="loginbutton" id={"submitButton"} onClick={props.handleDataSubmitted} style={props.style}> {props.buttonName} </button>
  );
};

export default SubmitButton;
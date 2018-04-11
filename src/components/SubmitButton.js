import React from 'react';
import Button from './styledComponents/submitButton';

const SubmitButton = props => {
  return (
      <Button id={"submitButton"} onClick={props.handleDataSubmitted} style={props.style}> {props.buttonName} </Button>
  );
};

export default SubmitButton;

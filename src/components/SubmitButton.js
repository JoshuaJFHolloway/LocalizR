import React from 'react';
import './styledComponents/content.css';

const SubmitButton = props => {
  return (
      <button className="loginbutton" id={"submitButton"} onClick={props.handleDataSubmitted}> {props.buttonName} </button>
  );
};

export default SubmitButton;
import React from 'react';

const SubmitButton = props => {
  return (
    <button onClick={props.handleDataSubmitted}> Submit </button>
  );
};

export default SubmitButton;
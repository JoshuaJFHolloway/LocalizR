import React from 'react';

const NameSubmit = props => {
  return (
    <button onClick={props.handleNameSubmitted}> Submit </button>
  );
};

export default NameSubmit;
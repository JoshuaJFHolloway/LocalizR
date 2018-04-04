import React from 'react';

const UsernameSubmit = props => {
  return (
    <button onClick={props.handleUsernameSubmitted}> Submit </button>
  );
};

export default UsernameSubmit;
import React from 'react';

const UsernameInput = props => {
  return(
    <input
      type="text"
      onChange={props.handleUsernameInput}
    />
  )
};

export default UsernameInput;
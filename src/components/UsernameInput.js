import React from 'react';

const UsernameInput = props => {
  return(
    <input
      type="text"
      name="Username"
      value={props.value}
      onChange={props.handleUsernameInput}
    />
  )
};

export default UsernameInput;
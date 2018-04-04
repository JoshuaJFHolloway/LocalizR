import React from 'react'
import UsernameQuestion from './UsernameQuestion'
import UsernameInput from './UsernameInput'

const UsernameInputUnit = props => {
  return (
    <div>
      <UsernameQuestion/>
      <UsernameInput
        handleUsernameInput = {props.handleUsernameInput}
      />
    </div>
  );
};

export default UsernameInputUnit

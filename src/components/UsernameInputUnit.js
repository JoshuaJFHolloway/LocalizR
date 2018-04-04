import React from 'react'
import UsernameQuestion from './UsernameQuestion'
import UsernameInput from './UsernameInput'

const UsernameInputUnit = props => {
  return (
    <div>
      <UsernameQuestion/>
      <UsernameInput
        handleUsernameInput = {props.handleUsernameInput}
        value = {props.value}
      />
    </div>
  );
};

export default UsernameInputUnit

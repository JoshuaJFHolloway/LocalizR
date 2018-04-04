import React from 'react'
import UsernameQuestion from './UsernameQuestion'
import UsernameInput from './UsernameInput'
import UsernameSubmit from './UsernameSubmit'

const UsernameInputUnit = props => {
  return (
    <div>
      <UsernameQuestion/>
      <UsernameInput
        handleUsernameInput = {props.handleUsernameInput}
      />
      <UsernameSubmit
        handleUsernameSubmitted = {props.handleUsernameSubmitted}
      />
    </div>
  );
};

export default UsernameInputUnit

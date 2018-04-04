import React from 'react'
import UsernameQuestion from './UsernameQuestion'
import UsernameInput from './UsernameInput'

const EmailInputUnit = props => {
  return (
    <div>
      <UsernameQuestion
        name = {props.name}
      />
      <UsernameInput
        handleUsernameInput = {props.handleUsernameInput}
        value = {props.value}
        input = {props.input}
      />
    </div>
  );
};

export default EmailInputUnit
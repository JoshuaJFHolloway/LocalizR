import React from 'react'
import Question from './Question'
import Input from './Input'

const EmailInputUnit = props => {
  return (
    <div>
      <Question
        name = {props.name}
      />
      <Input
        handleTextInput = {props.handleTextInput}
        value = {props.value}
        input = {props.input}
      />
    </div>
  );
};

export default EmailInputUnit;
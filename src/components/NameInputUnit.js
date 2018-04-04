import React from 'react'
import NameQuestion from './NameQuestion'
import NameInput from './NameInput'
import NameSubmit from './NameSubmit'

const NameInputUnit = props => {
  return (
    <div>
      <NameQuestion/>
      <NameInput/>
      <NameSubmit/>
    </div>
  );
};

export default NameInputUnit

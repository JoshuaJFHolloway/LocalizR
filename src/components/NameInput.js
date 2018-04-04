import React from 'react';

const NameInput = props => {
  return(
    <input
      type="text"
      onChange={props.handleNameInput}
    />
  )
};

export default NameInput;
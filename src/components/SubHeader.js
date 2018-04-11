import React from 'react';
import Subhead from './styledComponents/subheads.js';

const SubHeader = (props) => {
  return (
    <Subhead>{props.subHeader}</Subhead>
  );
};

export default SubHeader;

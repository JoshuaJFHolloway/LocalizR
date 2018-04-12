import React from 'react';
import LargeText from './styledComponents/subHeaders.js';

const SubHeader = (props) => {
  return (
    <LargeText>{props.subHeader}</LargeText>
  );
};

export default SubHeader;

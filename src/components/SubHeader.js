import React from 'react';
import Sub from "./styledComponents/subheadings.js";

const SubHeader = (props) => {
  return (
    <Sub>{props.subHeader}</Sub>
  );
};

export default SubHeader;


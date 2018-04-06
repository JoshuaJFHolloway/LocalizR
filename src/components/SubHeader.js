import React from 'react';
import Sub from "./styledComponents/subheadings.js";

const SubHeader = (props) => {
  return (
    <Sub>{props.subheader}</Sub>
  );
};

export default SubHeader;
import React from 'react';
import Title from "./styledComponents/titles.js";

const Header = (props) => {
  return (
    <Title>
      {props.header}
    </Title>
  );
};

export default Header;

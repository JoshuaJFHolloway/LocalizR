import React from 'react';
import './styledComponents/content.css';

const Header = (props) => {
  return (
    <div className="homepagetitle">
      {props.header}
    </div>
  );
};

export default Header;

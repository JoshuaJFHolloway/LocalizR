import React from 'react';

const Header = (props) => {
  return (
    <div className="homepagetitle">
      {props.header}
    </div>
  );
};

export default Header;

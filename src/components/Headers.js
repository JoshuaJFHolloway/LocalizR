import React from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import Font from "./styledComponents/fonts.js";

const Headers = () => {
  return (
    <Font>
      <Header/>
      <SubHeader/>
    </Font>
  );
};

export default Headers;
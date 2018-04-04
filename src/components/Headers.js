import React from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import FontFamily from './styledComponents/headers.js'

const Headers = () => {
  return (
    <FontFamily>
      <Header/>
      <SubHeader/>
    </FontFamily>
  );
};

export default Headers;
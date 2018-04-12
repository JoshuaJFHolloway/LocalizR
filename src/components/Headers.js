import React from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import SubHeadIndex from './styledComponents/subHeadIndex.js';

const Headers = () => {
  return <div>
      <Header header={"LocalizR"} />
      <SubHeadIndex>
      <SubHeader subHeader={"Be a traveler, not a tourist!"} />
      </SubHeadIndex>
    </div>;
};

export default Headers;

import React from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import SubHeadIndex from './styledComponents/subHeadIndex.js';

const Headers = () => {
  return <div>
      <Header header={"LocalizR"} />
      <SubHeadIndex>
      <SubHeader subHeader={"BE A TRAVELER, NOT A TOURIST!"} />
      </SubHeadIndex>
    </div>;
};

export default Headers;

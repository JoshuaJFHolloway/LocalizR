import React from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import SubHeadLock from './styledComponents/subHeaderLock.js';

const Headers = () => {
  return <div>
      <Header header={"LocalizR"} />
      <SubHeadLock>
      <SubHeader subHeader={"Be a traveler, not a tourist!"} />
      </SubHeadLock>
    </div>;
};

export default Headers;

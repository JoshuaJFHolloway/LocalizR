import React from 'react';
import Picture from './Picture'
import SubHeader from './SubHeader'

const LanguageList = (props) => {
  return (
    <div>
      <SubHeader
        subHeader={"Choose your language!"}
      />
      <Picture
        handlePictureClicked = {props.handlePictureClicked}
      />
      {props.spanishScenarios}
    </div>
  );
};

export default LanguageList;

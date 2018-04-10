import React from 'react';
import Picture from './Picture'
import SubHeader from './SubHeader'

const LanguageList = (props) => {
  return (
    <div className="displaybox">
    <div className="languagepagetitle">
      <SubHeader
        subHeader={"Choose your language!"}
      />
      <Picture
        handlePictureClicked = {props.handlePictureClicked}
      />
      {props.spanishScenarios}
    </div>
  </div>
  );
};

export default LanguageList;

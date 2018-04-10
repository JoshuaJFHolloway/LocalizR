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
        handlePictureClicked = {props.handleSpanishClicked}
        flagImage={props.spanishImage}
      />
      <Picture
        handlePictureClicked = {props.handleFrenchClicked}
        flagImage={props.frenchImage}
      />
      
      {props.spanishScenarios}
      {props.frenchScenarios}
    </div>
  </div>
  );
};

export default LanguageList;

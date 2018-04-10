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
        flagImage={props.spanishImage}
      />
      <Picture
        handlePictureClicked = {props.handlePictureClicked}
        flagImage={props.frenchImage}
      />
      
      {props.spanishScenarios}
    </div>
  );
};

export default LanguageList;

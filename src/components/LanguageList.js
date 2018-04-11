import React from 'react';
import Picture from './Picture'
import SubHeader from './SubHeader'
import SubmitButton from './SubmitButton'

const LanguageList = (props) => {
  return (
    <div>
      <SubmitButton
        buttonName={"Pick me a random scenario"}
        handleDataSubmitted={props.handleRandomScenario}
        />
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
  );
};

export default LanguageList;

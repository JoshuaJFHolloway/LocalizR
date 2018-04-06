import React from 'react';
import SubHeader from './SubHeader'
import Picture from './Picture'

const LanguageList = (props) => {
  return (
    <div>
      <SubHeader
        subheader={"Choose your language!"}
      />
      <Picture
        handlePictureClicked = {props.handlePictureClicked}
      />
    </div>
  );
};

export default LanguageList;

import React from 'react';
import SubHeader from './Subheader'
import Picture from './Picture'

const LanguageList = () => {
  return (
    <div>
      <SubHeader
        subheader={"Choose your language!"}
      />
      <Picture
        handlePictureClicked = {this.props.handlePictureClicked}
      />
    </div>
  );
};

export default LanguageList;

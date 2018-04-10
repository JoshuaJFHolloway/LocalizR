import React from 'react';

const Picture = props => {

    return (
      <div>
        <button onClick={props.handlePictureClicked}><img src={props.flagImage} /> </button>
      </div>
    );
};

export default Picture;
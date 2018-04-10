import React from 'react';

const Picture = props => {

    return (
      <div>
        <button onClick={props.handlePictureClicked}><img src={props.flagImage} width="100vh"/> </button>
      </div>
    );
};

export default Picture;
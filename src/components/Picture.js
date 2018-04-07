import React from 'react';

const Picture = props => {

    return (
      <div>
        <button onClick={props.handlePictureClicked}><img src="https://cdn2.iconfinder.com/data/icons/Flag/134/Spain.png" alt="themeimage" width="150"/> </button>
      </div>
    );
};

export default Picture;

import React from 'react';

const Picture = props => {

    return <div>
        <button onClick={props.handlePictureClicked}>
          <img src="https://image.ibb.co/cv3YNH/if_spain_flag_683099.png" alt="themeimage" width="150" />{" "}
        </button>
      </div>;
};

export default Picture;

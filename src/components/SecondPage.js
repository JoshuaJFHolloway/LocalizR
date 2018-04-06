import React, { Component } from 'react';
import SubHeader from './SubHeader';
import Picture from './Picture';



class SecondPage extends Component {
  
  constructor(){
    super();
    this.state = {
      spanish: null
    };
  };

  handlePictureClicked = () => {
    this.setState ({spanish: true});
  }

  render(){
    return (
      <div>
        <SubHeader
          subheader={"Choose your language!"}
        />
        <Picture 
        handlePictureClicked = {this.handlePictureClicked}
        />
      </div>
    );

  }
  
  
};

export default SecondPage;

import React, { Component } from 'react';
import SubHeader from './SubHeader';
import Picture from './Picture';



class ChooseLanguage extends Component {

  constructor(){
    super();
    this.state = {
      spanish: null
    };
  };

  handlePictureClicked = () => {
    this.setState ({spanish: true});
  }

  decider (){
    if(this.state.spanish === true){
      return 'Quiz'
    } else return 'ChooseLanguage'
  };

  render(){
    const quizViews = {
      Quiz: < Quiz />
    }

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

export default ChooseLanguage;

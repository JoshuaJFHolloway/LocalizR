import React, { Component } from 'react';
import ChooseLanguageHeader from './ChooseLanguageHeader';
import ChooseLanguageButton from './ChooseLanguageButton';

class ChooseLanguage extends Component {
  constructor() {
    super();
    this.state = {
      spanish: null
    };
  };

  handleSpanishSubmitted = () => {
    this.setState ({ spanish: true })
  };

  render() {
    return (
      <div>
        <ChooseLanguageHeader />
        <ChooseLanguageButton
          handleSpanishSubmitted = {this.handleSpanishSubmitted}
        />
      </div>
    );
  };
};

export default ChooseLanguage;

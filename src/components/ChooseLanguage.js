import React, { Component } from 'react';
import ChooseLanguageHeader from './ChooseLanguageHeader';
import ChooseLanguageButton from './ChooseLanguageButton';

class ChooseLanguage extends Component {
  constructor() {
    super();
    this.state = {
      spanish: null
    }
  };

  render() {
    return (
      <div>
        <ChooseLanguageHeader />
        <ChooseLanguageButton />
      </div>
    )
  }
};

export default ChooseLanguage;

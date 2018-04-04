import React from 'react';
import { shallow } from 'enzyme';
import ChooseLanguage from '../../components/ChooseLanguage';

describe('ChooseLanguage', () => {
  let chooselanguage = shallow(<ChooseLanguage />);

  describe('Rendering components', () => {

    it('renders correctly', () => {
      expect(chooselanguage).toMatchSnapshot();
    });

    it('renders ChooseLanguageHeader component', () => {
      expect(chooselanguage.find('ChooseLanguageHeader').exists()).toBe(true);
    });

    it('renders ChooseLanguageButton component', () => {
      expect(chooselanguage.find('ChooseLanguageButton').exists()).toBe(true);
    });
  });

  describe('initializes state succesfully', () => {
    expect(chooselanguage.state('spanish')).toEqual(null);
  })

});

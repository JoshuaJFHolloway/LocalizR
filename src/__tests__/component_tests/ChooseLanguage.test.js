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
    it('initializes spanish as null', () => {
      expect(chooselanguage.state('spanish')).toEqual(null);
    });
  });

  describe('Props successfully passing down to the ChooseLanguage component', () => {
    it('passes handleSpanishSubmitted', () => {
      expect(chooselanguage.find('ChooseLanguageButton').prop('handleSpanishSubmitted')).toBe(chooselanguage.instance().handleSpanishSubmitted);
    });
  });

  describe('Updates state successfully', () => {
    
    it('updates the state of spanish when clicks spanish', () => {
      chooselanguage.instance().handleSpanishSubmitted();
      expect(chooselanguage.state('spanish')).toEqual(true);
    })
  })

});

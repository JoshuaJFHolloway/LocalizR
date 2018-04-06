import React from 'react';
import { shallow } from 'enzyme';
import ChooseLanguage from '../../components/ChooseLanguage';

describe('ChooseLanguage', () => {
  let chooselanguage = shallow(<ChooseLanguage />);

  describe('Rendering components', () => {

    it('renders correctly', () => {
      expect(chooselanguage).toMatchSnapshot();
    });
  });

  describe('Initializes state successfully', () =>{
    it('initializes spanish as null', () => {
      expect(chooselanguage.state('spanish')).toEqual(null);
    });
  });

  describe('Props successfully passing down to the chooselanguage component', () =>{
    it('passes handlePictureClicked', () => {
      expect(chooselanguage.find('LanguageList').prop('handlePictureClicked')).toBe(chooselanguage.instance().handlePictureClicked);
    });
  });

  describe("When spanish equals true", () => {
    it("It renders the Quiz page", () => {
      chooselanguage.instance().handlePictureClicked();
      expect(chooselanguage.instance().decider()).toEqual("SpanishQuiz");
    });
  });


  describe('Updates state successfully', () => {
    it("Updates the state when clicks spanish Picture component", () => {
      chooselanguage.instance().handlePictureClicked();
      expect(chooselanguage.state('spanish')).toEqual(true);
    });
  });
});

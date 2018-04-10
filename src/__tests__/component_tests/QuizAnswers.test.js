import React from 'react';
import { shallow, mount } from 'enzyme';
import QuizAnswers from '../../components/QuizAnswers';

describe('QuizAnswers', () =>{

  let quizanswers = shallow(<QuizAnswers/>);

  describe('renders components correctly',() =>{
    it('renders correctly', () => {
      expect(quizanswers).toMatchSnapshot();
    });

    it('renders four SubmitButtons', () =>{
     expect(quizanswers.find(('SubmitButton')*4).exists()).toBe(true);
    });

    describe('Props successfully passing down to the chooselanguage component', () =>{
      it('passes handlePictureClicked', () => {
        expect(chooselanguage.find('LanguageList').prop('handlePictureClicked')).toBe(chooselanguage.instance().handlePictureClicked);
      });
    });

    it('renders 3 QuizAnswer components', () => {
      expect(quizanswers.find('QuizAnswer').length).toEqual(1);
    });

  });
});

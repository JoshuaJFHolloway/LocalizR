import React from 'react';
import { shallow } from 'enzyme';
import QuizAnswers from '../../components/QuizAnswers';

describe('QuizAnswers', () =>{

  let quizanswers = shallow(<QuizAnswers/>);

  describe('renders components correctly',() =>{
    it('renders correctly', () => {
      expect(quizanswers).toMatchSnapshot();
    });

    it('renders four SubmitButtons', () =>{
     expect(quizanswers.find(('SubmitButton')).exists()).toBe(true);
    });

    // describe('Props successfully passing down to the chooselanguage component', () =>{
    //   it('passes buttonName and handleDataSubmitted', () => {
    //     expect(quizanswers.find('SubmitButton').prop('buttonName')).toBe(quizanswers.props.answer1);
    //     expect(quizanswers.find('SubmitButton').prop('handleDataSubmitted')).toBe(quizanswers.props.handleDataSubmitted);
    //   });
    // });

    // it('renders 3 QuizAnswer components', () => {
    //   expect(quizanswers.find('QuizAnswer').length).toEqual(1);
    // });

  });
});

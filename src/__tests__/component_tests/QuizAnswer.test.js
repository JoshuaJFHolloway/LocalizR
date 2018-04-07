import React from 'react';
import { shallow } from 'enzyme';
import QuizAnswer from '../../components/QuizAnswer';

describe('QuizAnswer', () => {
  let quizanswer = shallow(<QuizAnswer />);

  describe('Rendering components', () => {
    it('renders correctly', () => {
      expect(quizanswer).toMatchSnapshot();
    });
  });

  describe('when user clicks QuizAnswer button', () => {
    it('should call the handleAnswerSubmitted function when user clicks first button', () => {
      let mockhandleAnswerSubmitted = jest.fn();
      let submit = shallow(<QuizAnswer handleAnswerSubmitted = {mockhandleAnswerSubmitted}/>);
      submit.find("#submitButton1").simulate('click');
      expect(mockhandleAnswerSubmitted).toBeCalled();
    });
    it('should call the handleAnswerSubmitted function when user clicks second button', () => {
      let mockhandleAnswerSubmitted = jest.fn();
      let submit = shallow(<QuizAnswer handleAnswerSubmitted = {mockhandleAnswerSubmitted}/>);
      submit.find("#submitButton2").simulate('click');
      expect(mockhandleAnswerSubmitted).toBeCalled();
    });
    it('should call the handleAnswerSubmitted function when user clicks third button', () => {
      let mockhandleAnswerSubmitted = jest.fn();
      let submit = shallow(<QuizAnswer handleAnswerSubmitted = {mockhandleAnswerSubmitted}/>);
      submit.find("#submitButton3").simulate('click');
      expect(mockhandleAnswerSubmitted).toBeCalled();
    });
  })
});

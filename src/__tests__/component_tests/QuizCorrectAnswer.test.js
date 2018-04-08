import React from 'react';
import { shallow } from 'enzyme';
import QuizCorrectAnswer from '../../components/QuizCorrectAnswer';

describe('QuizCorrectAnswer', () => {
  let quizcorrectanswer = shallow(<QuizCorrectAnswer />)

  describe('renders components correctly', () => {
    it('renders correctly', () => {
      expect(quizcorrectanswer).toMatchSnapshot();
    });
  });

  describe('when user clicks QuizCorrectAnswer button', () => {
    it('should call the handleCorrectAnswerSubmitted function', () => {
      let mockhandleCorrectAnswerSubmitted = jest.fn();
      let submit = shallow(<QuizCorrectAnswer handleCorrectAnswerSubmitted = {mockhandleCorrectAnswerSubmitted} />);
      submit.find("#submitButton").simulate('click');
      expect(mockhandleCorrectAnswerSubmitted).toBeCalled();
    });
  });
});

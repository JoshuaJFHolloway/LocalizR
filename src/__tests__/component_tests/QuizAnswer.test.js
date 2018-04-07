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
    it('should call the handleAnswerSubmitted function', () => {
      let mockhandleAnswerSubmitted = jest.fn();
      let submit = shallow(<QuizAnswer handleAnswerSubmitted = {mockhandleAnswerSubmitted}/>);
      submit.find("#submitButton").simulate('click');
      expect(mockhandleAnswerSubmitted).toBeCalled();
    })
  })
});

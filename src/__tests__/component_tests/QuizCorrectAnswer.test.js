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
});

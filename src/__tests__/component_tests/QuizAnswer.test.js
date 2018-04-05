import React from 'react';
import { shallow } from 'enzyme';
import QuizAnswer from '../../components/QuizAnswer';

describe('QuizAnswer', () => {
  let quizanswer = shallow(<QuizAnswer />);

  describe('Rendering components', () => {
    it('renders correctly', () => {
      expect(quizanswer).toMatchSnapshot();
    })
  })
})

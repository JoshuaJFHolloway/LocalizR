import React from 'react';
import { shallow } from 'enzyme';
import QuizQuestion from '../../components/QuizQuestion';

describe('QuizQuestion', () => {
  let quizquestion = shallow(<QuizQuestion />);

  it('renders correctly', () => {
    expect(quizquestion).toMatchSnapshot();
  })
})

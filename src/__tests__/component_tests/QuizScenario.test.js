import React from 'react';
import { shallow } from 'enzyme';
import QuizScenario from '../../components/QuizScenario';

describe('QuizScenario', () => {
  let quizscenario = shallow(<QuizScenario />);

  it('renders correctly', () => {
    expect(quizscenario).toMatchSnapshot();
  })
})

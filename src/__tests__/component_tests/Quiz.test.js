import React from 'react';
import { shallow } from 'enzyme';
import Quiz from '../../components/Quiz';

describe('Quiz', () => {
  let quiz = shallow(<Quiz />);

  describe('Rendering components', () => {
    it('renders correctly', () => {
      expect(quiz).toMatchSnapshot();
    })

    it('renders a QuizScenario component', () => {
      expect(quiz.find('QuizScenario').exists()).toBe(true);
    })

    it('renders a QuizPicture component', () => {
      expect(quiz.find('QuizPicture').exists()).toBe(true);
    })

    it('renders a QuizAnswer component', () => {
      expect(quiz.find('QuizAnswer').exists()).toBe(true);
    })
  });
});

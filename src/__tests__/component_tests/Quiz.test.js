import React from 'react';
import { shallow } from 'enzyme';
import Quiz from '../../components/Quiz';

describe('Quiz', () => {
  let quiz = shallow(<Quiz />);

  describe('Rendering components', () => {
    it('renders correctly', () => {
      expect(quiz).toMatchSnapshot();
    });

    it('renders a QuizQ component when counter is 0', () => {
      expect(quiz.find('QuizQ').exists()).toBe(true);
    });

    it('renders a QuizQ component when counter is 7', () => {
      quiz.setState({ counter: 7 });
      expect(quiz.find('QuizQ').exists()).toBe(true);
    });

    it('renders the ResultsPage component when the counter is 8', () => {
      quiz.setState({ counter: 8 });
      expect(quiz.find('ResultsPage').exists()).toBe(true);
    });

  });
});

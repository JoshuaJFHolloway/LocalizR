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

  describe('Score updating correctly', () => {
    it('does not change score when incorrect answer given', () => {
      quiz.instance().handleAnswerSubmitted1();
      expect(quiz.state('score')).toEqual(0)
    });

    it('increase the score by 1 when correct answer given', () => {
      quiz.instance().handleCorrectAnswerSubmitted();
      expect(quiz.state('score')).toEqual(1)
    });
  });

});

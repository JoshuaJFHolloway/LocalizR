import React from 'react';
import { shallow } from 'enzyme';
import SpanishQuizQ from '../../components/SpanishQuizQ';

describe('SpanishQuizQ', () => {
  let spanishquizq = shallow(<SpanishQuizQ />);

  describe('Rendering components', () => {
    it('renders correctly', () => {
      expect(spanishquizq).toMatchSnapshot();
    })

    it('renders a QuizScenario component', () => {
      expect(spanishquizq.find('QuizScenario').exists()).toBe(true);
    })

    it('renders a QuizPicture component', () => {
      expect(spanishquizq.find('QuizPicture').exists()).toBe(true);
    })

    it('renders a QuizAnswer component', () => {
      expect(spanishquizq.find('QuizAnswers').exists()).toBe(true);
    })

    it('renders a QuizQuestion component', () => {
      expect(spanishquizq.find('QuizQuestion').exists()).toBe(true);
    })
  });
});

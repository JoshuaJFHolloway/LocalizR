import React from 'react';
import { shallow } from 'enzyme';
import SpanishQuiz from '../../components/SpanishQuiz';

describe('SpanishQuiz', () => {
  let spanishquiz = shallow(<SpanishQuiz />);

  describe('Renders components', () => {
    it('renders correctly', () => {
      expect(spanishquiz).toMatchSnapshot();
    });
  });
});

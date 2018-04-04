import React from 'react';
import { shallow } from 'enzyme';
import QuizPicture from '../../components/QuizPicture';

describe('QuizPicture', () => {
  let quizpicture = shallow(<QuizPicture />);

  it('renders correctly', () => {
    expect(quizpicture).toMatchSnapshot();
  });
});

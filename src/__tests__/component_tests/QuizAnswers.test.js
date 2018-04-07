import React from 'react';
import { shallow, mount } from 'enzyme';
import QuizAnswers from '../../components/QuizAnswers';

describe('QuizAnswers', () =>{

  let quizanswers = shallow(<QuizAnswers answer={'el vestido rojo'} />)

  describe('renders components correctly',() =>{
    it('renders correctly', () => {
      expect(quizanswers).toMatchSnapshot();
    });

    it('renders QuizAnswer', () =>{
     expect(quizanswers.find('QuizAnswer').exists()).toBe(true);
    });

    it('renders QuizCorrectAnswer', () => {
      expect(quizanswers.find('QuizCorrectAnswer').exists()).toBe(true);
    });

    it('renders 3 QuizAnswer components', () => {
      expect(quizanswers.find('QuizAnswer').length).toEqual(1);
    });

  });
});

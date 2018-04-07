import React from 'react';
import { shallow, mount } from 'enzyme';
import QuizAnswers from '../../components/QuizAnswers';
import QuizAnswer from '../../components/QuizAnswer';


describe('QuizAnswers', () =>{

  let quizanswers = shallow(<QuizAnswers />)
  let mountquizanswers = mount(<QuizAnswers />)

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

    it('has 3 QuizAnswer components', () => {
      expect(quizanswers.find('QuizAnswer').length).toEqual(3);
    });

  });
});

//Test incomplete, we don't know how to test the same component with different props
// and if appears more than once.

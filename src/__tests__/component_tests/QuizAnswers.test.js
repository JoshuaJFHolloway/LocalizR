import React from 'react';
import { shallow } from 'enzyme';
import QuizAnswers from '../../components/QuizAnswers';


describe('QuizAnswers', () =>{

    let quizanswers = shallow(<QuizAnswers />)

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

   });
});

//Test incomplete, we don't know how to test the same component with different props
// and if appears more than once.
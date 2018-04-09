import React from 'react';
import { shallow } from 'enzyme';
import SpanishScenarios from '../../components/SpanishScenarios';


describe('SpanishScenarios', () => {

  let spanishscenario = shallow(<SpanishScenarios />)
  
  describe ('renders components', () => {
    it('renders correctly', () => {
      expect(spanishscenario).toMatchSnapshot();  
    });

    it('renders two SubmitButton component', () => {
      expect(spanishscenario.find('SubmitButton').length).toEqual(2);
    });

  });
});
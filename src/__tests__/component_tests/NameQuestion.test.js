import React from 'react';
import { shallow } from 'enzyme';
import NameQuestion from '../../components/NameQuestion';

describe('NameQuestion',() => {
   
  let namequestion = shallow(<NameQuestion />)
  
  describe('renders components correctly', () => {
    
    it('renders correctly',() =>{
      expect(namequestion).toMatchSnapshot();
    });

  });
  
});
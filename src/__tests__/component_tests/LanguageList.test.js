import React from 'react';
import { shallow } from 'enzyme';
import LanguageList from '../../components/LanguageList';

describe('LanguageList', () => {

  let languagelist = shallow(<LanguageList />)

  describe('renders components correctly', () => {
    
    it('renders correctly', () => {
      expect(languagelist).toMatchSnapshot();
    });

    it('renders SubHeader correctly', () => {
      expect(languagelist.find('SubHeader').exists()).toBe(true);
    });
  });
    
});
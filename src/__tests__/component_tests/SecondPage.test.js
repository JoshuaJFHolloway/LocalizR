import React from 'react';
import { shallow } from 'enzyme';
import SecondPage from '../../components/SecondPage';

describe('SecondPage', () => {
  let secondpage = shallow(<SecondPage />);

  describe('Rendering components', () => {

    it('renders correctly', () => {
      expect(secondpage).toMatchSnapshot();
    })

    it('renders ChooseLanguage component', () => {
      expect(secondpage.find('ChooseLanguage').exists()).toBe(true);
    });
  })
});

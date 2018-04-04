import React from 'react';
import { shallow } from 'enzyme';
import UsernameInputUnit from '../../components/UsernameInputUnit';

describe('UsernameInputUnit', () => {
  let nameinputunit = shallow(<UsernameInputUnit />);

  describe('Rendering components', () => {

    it('renders correctly', () => {
      expect(nameinputunit ).toMatchSnapshot();
    });

    it('renders UsernameQuestion component', () => {
      expect(nameinputunit.find('UsernameQuestion').exists()).toBe(true);
    });

    it('renders UsernameInput component', () => {
      expect(nameinputunit.find('UsernameInput').exists()).toBe(true);
    });

  })
});
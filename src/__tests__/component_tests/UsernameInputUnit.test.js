import React from 'react';
import { shallow } from 'enzyme';
import UsernameInputUnit from '../../components/UsernameInputUnit';

describe('UsernameInputUnit', () => {
  let usernameinputunit = shallow(<UsernameInputUnit />);

  describe('Rendering components', () => {

    it('renders correctly', () => {
      expect(usernameinputunit ).toMatchSnapshot();
    });

    it('renders UsernameQuestion component', () => {
      expect(usernameinputunit.find('Question').exists()).toBe(true);
    });

    it('renders UsernameInput component', () => {
      expect(usernameinputunit.find('Input').exists()).toBe(true);
    });

  })
});
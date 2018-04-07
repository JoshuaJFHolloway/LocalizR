import React from 'react';
import { shallow } from 'enzyme';
import PasswordInputUnit from '../../components/PasswordInputUnit';


describe('PasswordInputUnit', () => {

    let passwordinputunit = shallow(<PasswordInputUnit />)

  describe('renders components correctly', () => {
    it('render correctly', () => {
      expect(passwordinputunit).toMatchSnapshot();
    })
  })   
});
import React from 'react';
import { shallow } from 'enzyme';
import Form from '../../components/TextBoxes';

describe('TextBoxes', () => {
  let form = shallow(<Form />);

  describe('Rendering components', () => {

    it('renders correctly', () => {
      expect(form).toMatchSnapshot();
    });

    it('renders a Header and SubHeader component', () => {
      expect(form.find('Header').exists()).toBe(true);
      expect(form.find('SubHeader').exists()).toBe(true);
    });

  })
});

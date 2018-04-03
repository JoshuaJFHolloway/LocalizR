import React from 'react';
import { shallow } from 'enzyme';
import Form from '../../components/Form';

describe('Form', () => {
  let form = shallow(<Form />);

  describe('Rendering components', () => {

    it('renders correctly', () => {
      expect(form).toMatchSnapshot();
    });

    it('renders a TextBoxes component', () => {
      expect(form.find('TextBoxes').exists()).toBe(true);
    });

  })
});

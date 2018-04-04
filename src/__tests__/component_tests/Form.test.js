import React from 'react';
import { shallow } from 'enzyme';
import Form from '../../components/Form';

describe('Form', () => {
  let form = shallow(<Form />);


  describe('Rendering components', () => {

    it('renders correctly', () => {
      expect(form).toMatchSnapshot();
    });

    it('renders a Headers component', () => {
      expect(form.find('Headers').exists()).toBe(true);
    });

    it('renders a NameInputUnit component', () => {
      expect(form.find('NameInputUnit').exists()).toBe(true);
    });
  });


  describe('initializes state successfully', () => {

    it('initializes nameSubmitted as false', () => {
      expect(form.state('nameSubmitted')).toEqual(false);
    });

    it('initializes name as null', () => {
      expect(form.state('name')).toEqual(null);
    });
  });


  describe('Props successfully passing down to the NameInputUnit component', () => {

    it('passes handleNameInput', () => {
      expect(form.find('NameInputUnit').prop('handleNameInput')).toBe(form.instance().handleNameInput);
    });

    it('passes handleNameSubmitted', () => {
      expect(form.find('NameInputUnit').prop('handleNameSubmitted')).toBe(form.instance().handleNameSubmitted);
    });
  });

});


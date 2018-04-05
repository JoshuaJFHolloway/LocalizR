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

    it('renders a UsernameInputUnit component', () => {
      expect(form.find('UsernameInputUnit').exists()).toBe(true);
    });

    it('renders a EmailInputUnit component', () => {
      expect(form.find('EmailInputUnit').exists()).toBe(true);
    });

    it('renders a PasswordInputUnit component', () => {
      expect(form.find('PasswordInputUnit').exists()).toBe(true);
    });

    it('renders a SubmitButton component', () => {
      expect(form.find('SubmitButton').exists()).toBe(true);
    });
  });

  describe('initializes state successfully', () => {

    it('initializes Username as null', () => {
      expect(form.state('Username')).toEqual(null);
    });

    it('initializes Email as null', () => {
      expect(form.state('Email')).toEqual(null);
    });

    it('initializes Password as null', () => {
      expect(form.state('Password')).toEqual(null);
    });
  });

  describe('Props successfully passed down', () => {

    it('passes handleTextInput to the UsernameInputUnit component', () => {
      expect(form.find('UsernameInputUnit').prop('handleTextInput')).toBe(form.instance().handleTextInput);
      // expect(form.find('UsernameInputUnit').prop('value')).toBe(form.instance().handleTextInput);
      // expect(form.find('UsernameInputUnit').prop('name')).toBe(form.instance().handleTextInput);
      // expect(form.find('UsernameInputUnit').prop('input')).toBe(form.instance().handleTextInput);
    });

    it('passes handleDataSubmitted to the SubmitButton component', () => {
      expect(form.find('SubmitButton').prop('handleDataSubmitted')).toBe(form.instance().handleDataSubmitted);
    });
  });


  describe('Updating state successfully', () => {

    it('updates the state of the name when someone types in the box', () => {
      
      const event = { target: { name: 'Username', value: 'Augustus' } };
      form.instance().handleTextInput(event);
      expect(form.state('Username')).toEqual('Augustus');
    });

  });
});

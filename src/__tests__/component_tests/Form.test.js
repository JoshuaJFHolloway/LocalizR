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

    it('renders a SubmitButton component', () => {
      expect(form.find('SubmitButton').exists()).toBe(true);
    });
  });


  describe('initializes state successfully', () => {

    it('initializes dataSubmitted as false', () => {
      expect(form.state('dataSubmitted')).toEqual(false);
    });

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


  describe('Props successfully passing down to the UsernameInputUnit component', () => {

    it('passes handleNameInput', () => {
      expect(form.find('UsernameInputUnit').prop('handleUsernameInput')).toBe(form.instance().handleUsernameInput);
    });
  });


  describe('Props successfully passing down to the SubmitButton component', () => {

    it('passes handleDataSubmitted', () => {
      expect(form.find('SubmitButton').prop('handleDataSubmitted')).toBe(form.instance().handleDataSubmitted);
    });
  });


  describe('Updating state successfully', () => {

    it('updates the state of the name when someone types in the box', () => {
      const event = { target: { name: 'Username', value: 'Augustus' } };
      form.instance().handleUsernameInput(event);
      expect(form.state('Username')).toEqual('Augustus');
    });

    it('updates the state of dataSubmitted to true', () => {
      form.instance().handleDataSubmitted();
      expect(form.state('dataSubmitted')).toEqual(true);
    });

  });
});


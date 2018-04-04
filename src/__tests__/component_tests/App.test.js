import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

describe('App', () => {
  const app = shallow(<App />);

  describe('renders children', () => {

    it('renders correctly', () => {
      expect(app).toMatchSnapshot();
    });

    it('renders a Form component', () => {
      expect(app.find('Form').exists()).toBe(true);
    });

  });

  describe('passes props', () => {

    it('passes handleDataSubmitted to the Form component', () => {
      expect(app.find('Form').prop('handleDataSubmitted')).toBe(app.instance().handleDataSubmitted);
    });

  });

  describe('Initializes state', () => {

    it('initializes dataSubmitted state as false ', () => {
      expect(app.state('dataSubmitted')).toEqual(false);
    });
  });

  describe('Updating state successfully', () => {

    it('updates the state of dataSubmitted to true', () => {
      app.instance().handleDataSubmitted();
      expect(app.state('dataSubmitted')).toEqual(true);
    });
  });

});

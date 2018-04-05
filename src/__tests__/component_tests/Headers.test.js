import React from 'react';
import { shallow } from 'enzyme';
import Headers from '../../components/Headers';

describe('Headers', () => {
  let headers = shallow(<Headers />);

  describe('Rendering components', () => {

    it('renders correctly', () => {
      expect(headers).toMatchSnapshot();
    });

    it('renders a Header component', () => {
      expect(headers.find('Header').exists()).toBe(true);
    });

    it('renders a SubHeader component', () => {
      expect(headers.find('SubHeader').exists()).toBe(true);
    });

  })
});

import React from 'react';
import { shallow } from 'enzyme';
import SecondPage from '../../components/SecondPage';

describe('SecondPage', () => {
  let secondpage = shallow(<SecondPage />);

  describe('Rendering components', () => {

    it('renders correctly', () => {
      expect(secondpage).toMatchSnapshot();
    })

    it('renders Header component', () => {
      expect(secondpage.find('SubHeader').exists()).toBe(true);
    });

    it("renders Picture component", () => {
      expect(secondpage.find('Picture').exists()).toBe(true);
    });
  })
});

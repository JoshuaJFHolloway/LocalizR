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

  describe('Initializes state successfully', () =>{
    it('initializes spanish as null', () => {
      expect(secondpage.state('spanish')).toEqual(null);
    });
  });

  describe('Updates state successfully', () => {
    it("Updates the state when clicks spanish Picture component", () => {
      secondpage.instance().handlePictureClicked();
      expect(secondpage.state('spanish')).toEqual(true);
    })
  })
});

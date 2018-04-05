import React from 'react';
import { shallow } from 'enzyme';
import SubHeader from '../../components/SubHeader';

describe('SubHeader', () => {
  let subheader = shallow(<SubHeader />);

  it('renders correctly', () => {
    expect(subheader).toMatchSnapshot();
  });

});

import React from 'react';
import { shallow } from 'enzyme';
import NameSubmit from '../../components/NameSubmit';

describe('NameSubmit', () => {
  let namesubmit = shallow(<NameSubmit />);

  it('renders correctly', () => {
    expect(namesubmit).toMatchSnapshot();
  });

});
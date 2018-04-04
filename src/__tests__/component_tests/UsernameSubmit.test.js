import React from 'react';
import { shallow } from 'enzyme';
import UsernameSubmit from '../../components/UsernameSubmit';

describe('NameSubmit', () => {
  let namesubmit = shallow(<UsernameSubmit />);

  it('renders correctly', () => {
    expect(namesubmit).toMatchSnapshot();
  });

});
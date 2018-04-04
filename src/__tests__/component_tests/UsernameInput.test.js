import React from 'react';
import { shallow } from 'enzyme';
import UsernameInput from '../../components/UsernameInput';

describe('NameSubmit', () => {
  let nameinput = shallow(<UsernameInput />);

  it('renders correctly', () => {
    expect(nameinput).toMatchSnapshot();
  });

});
import React from 'react';
import { shallow } from 'enzyme';
import NameInput from '../../components/NameInput';

describe('NameSubmit', () => {
  let nameinput = shallow(<NameInput />);

  it('renders correctly', () => {
    expect(nameinput).toMatchSnapshot();
  });

});
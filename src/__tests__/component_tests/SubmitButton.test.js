import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton from '../../components/SubmitButton';

describe('Submit data', () => {
  let submit = shallow(<SubmitButton />);

  it('renders correctly', () => {
    expect(submit).toMatchSnapshot();
  });

});
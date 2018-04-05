import React from 'react';
import { shallow, mount } from 'enzyme';
import UsernameQuestion from '../../components/Question';

describe('NameQuestion', () => {
  let namequestion = shallow(<UsernameQuestion />);

  it('renders correctly', () => {
    expect(namequestion).toMatchSnapshot();
  });

});
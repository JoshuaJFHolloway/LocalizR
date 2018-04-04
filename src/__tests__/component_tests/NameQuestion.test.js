import React from 'react';
import { shallow, mount } from 'enzyme';
import NameQuestion from '../../components/NameQuestion';

describe('NameQuestion', () => {
  let namequestion = shallow(<NameQuestion />);

  it('renders correctly', () => {
    expect(namequestion).toMatchSnapshot();
  });

});
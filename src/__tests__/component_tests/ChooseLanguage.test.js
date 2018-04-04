import React from 'react';
import { shallow } from 'enzyme';
import ChooseLanguage from '../../components/ChooseLanguage';

describe('ChooseLanguage', () => {
  const chooselanguage = shallow(<ChooseLanguage />);

  it('renders correctly', () => {
    expect(chooselanguage).toMatchSnapshot();
  })
})

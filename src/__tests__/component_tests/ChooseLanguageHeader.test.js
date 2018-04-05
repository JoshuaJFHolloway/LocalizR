import React from 'react';
import { shallow } from 'enzyme';
import ChooseLanguageHeader from '../../components/ChooseLanguageHeader';

describe('ChooseLanguageHeader', () => {
  let chooselanguageheader = shallow(<ChooseLanguageHeader />);

  it('renders correctly', () => {
    expect(chooselanguageheader).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import ChooseLanguageButton from '../../components/ChooseLanguageButton';

describe('ChooseLanguageButton', () => {
  let chooselanguagebutton = shallow(<ChooseLanguageButton />);

  it('renders correctly', () => {
    expect(chooselanguagebutton).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import ChooseLanguage from '../../components/ChooseLanguage';

describe('ChooseLanguage', () => {
  let chooselanguage = shallow(<ChooseLanguage />);

  it('renders correctly', () => {
    expect(chooselanguage).toMatchSnapshot();
  });

  it('renders ChooseLanguageHeader component', () => {
    expect(chooselanguage.find('ChooseLanguageHeader').exists()).toBe(true);
  });

  it('renders ChooseLanguageButton component', () => {
    expect(chooselanguage.find('ChooseLanguageButton').exists()).toBe(true);
  });

});

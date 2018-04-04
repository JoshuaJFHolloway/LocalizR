import React from 'react';
import { shallow } from 'enzyme';
import ChooseLanguage from '../../components/ChooseLanguage';

describe('ChooseLanguage', () => {
  const chooselanguage = shallow(<ChooseLanguage />);

  it('renders correctly', () => {
    expect(chooselanguage).toMatchSnapshot();
  });

  it('renders ChooseLanguageHeader component', () => {
    expect(chooselanguage.find('ChooseLanguageHeader').exists()).toBe(true);
  });

});

import React from 'react';
import { shallow } from 'enzyme';
import LanguageList from '../../components/LanguageList';

describe('LanguageList', () => {

    let languagelist = shallow(<LanguageList />)

    it('renders correctly', () => {
        expect(languagelist).toMatchSnapshot();
    });

});
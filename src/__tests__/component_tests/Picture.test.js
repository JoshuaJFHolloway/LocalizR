import React from 'react';
import { shallow } from 'enzyme';
import Picture from '../../components/Picture';

describe('Picture', () => {
    let picture = shallow(<Picture />);

    it("renders correctly",() => {
        expect(picture).toMatchSnapshot();
    });

});



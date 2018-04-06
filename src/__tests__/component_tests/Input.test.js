import React from 'react';
import { shallow } from 'enzyme';
import Input from '../../components/Input';

describe('Submit', () => {
  let input = shallow(<Input />);

  it('renders correctly', () => {
    expect(input).toMatchSnapshot();
  });

  describe('when a user inputs text into the field', () => {

    it('should call the handleTextInput function', () => {
      let mockhandleTextInput = jest.fn();
      let input = shallow(<Input handleTextInput = {mockhandleTextInput} />);
      input.find('#input').simulate('change');
      expect(mockhandleTextInput).toBeCalled();
    })
  })


});
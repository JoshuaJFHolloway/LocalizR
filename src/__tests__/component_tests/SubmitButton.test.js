import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton from '../../components/SubmitButton';

describe('Submit data', () => {
  let submit = shallow(<SubmitButton />);

  it('renders correctly', () => {
    expect(submit).toMatchSnapshot();
  });


  describe('when a user clicks the button', () => {

    it('should call the handleDataSubmitted function', () => {
      let mockhandleDataSubmitted = jest.fn();
      let submit = shallow(<SubmitButton handleDataSubmitted = {mockhandleDataSubmitted} />);
      submit.find("#submitButton").simulate('click');
      expect(mockhandleDataSubmitted).toBeCalled();
    })
  });

});
import React from 'react';
import { shallow } from 'enzyme';
import ResultsPage from '../../components/ResultsPage';

describe('ResultsPage', () => {
  let resultspage = shallow(<ResultsPage />);

  describe('Rendering components', () => {
    it('renders correcrly', () => {
      expect(resultspage).toMatchSnapshot();
    });
  });
});

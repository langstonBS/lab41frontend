import React from 'react';
import { shallow } from 'enzyme';
import FormDisplay from './FormDisplay';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<FormDisplay />);
    expect(wrapper).toMatchSnapshot();
  });
});
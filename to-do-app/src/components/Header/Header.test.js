import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

const setUp = (props={}) => {
  const component = shallow(<Header { ...props }/>);
  return component;
}

describe('Header Component', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should render header component without errors', () => {
    const wrapper = component.find('.header');
    expect(wrapper.length).toBe(1);
  });

  it('should render logo', () => {
    const logo = component.find('.logo-img');
    expect(logo.length).toBe(1);
  });
});
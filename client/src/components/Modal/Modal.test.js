import React from 'react';
import {configure, mount} from 'enzyme';
import NewPost from './Modal';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = mount(<NewPost />)
  expect(wrapper).toHaveState({ modal: false });
});

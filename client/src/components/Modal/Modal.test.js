import React from 'react';
import {configure, shallow} from 'enzyme';
import Modal from './Modal';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<Modal />);
});
import React from 'react';
import {configure, shallow} from 'enzyme';
import CategoryList from './CategoryList';
import Adapter from 'enzyme-adapter-react-16';
import { MDBListGroup } from 'mdbreact';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<CategoryList />);
});
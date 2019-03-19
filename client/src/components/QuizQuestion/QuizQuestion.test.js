import React from 'react';
import {configure, shallow} from 'enzyme';
import QuizQuestion from './QuizQuestion';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<QuizQuestion />);
});
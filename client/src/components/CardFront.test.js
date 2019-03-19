import React from 'react';
import {configure, shallow} from 'enzyme';
import CardFront from './CardFront';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// it('renders without crashing', () => {
//   shallow(<CardFront />);
// });

it('check that card placeholder renders', () => {  
    const card = shallow(<CardFront />).dive()
    expect(card.find('p').text()).toEqual('Choose a category to see the flashcards.');
});
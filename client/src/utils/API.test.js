import React from 'react';
import API from "./API";
import Adapter from 'enzyme-adapter-react-16';

//configure({ adapter: new Adapter() });

test('card array returned from database', () => {
    return API.getCards().then(data => {
        expect(data).toBeDefined()
    })
});
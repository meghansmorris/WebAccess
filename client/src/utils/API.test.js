import React from 'react';
import API from "./API"

test('card array returned from database', () => {
    return API.getCards().then(data => {
        expect(data).toBeDefined()
    })
})
import React from 'react';
import {shallow} from "enzyme";
import Flashcard from './Flashcard';

describe("<Flashcard />", () => {
  it('renders card area', () => {
    const card = shallow(<Flashcard />);
    expect(card.find('list-unstyled').length).toEqual(1);
  });
});
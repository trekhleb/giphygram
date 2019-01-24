import React from 'react';
import renderer from 'react-test-renderer';
import { SearchForm } from '../SearchForm';

describe('SearchForm', () => {
  it('should be rendered correctly empty query', () => {
    const tree = renderer
      .create(<SearchForm/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be rendered correctly non-empty query', () => {
    const tree = renderer
      .create(<SearchForm query={'kittens'}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

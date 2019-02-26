import React from 'react';
import renderer from 'react-test-renderer';
import { SearchSummary } from '../SearchSummary';

describe('SearchSummary', () => {
  it('should be rendered correctly', () => {
    const tree = renderer
      .create(<SearchSummary total={42} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should not be rendered if there are no search items', () => {
    const tree = renderer
      .create(<SearchSummary />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be rendered if nothing was found', () => {
    const tree = renderer
      .create(<SearchSummary total={0} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

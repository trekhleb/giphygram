import React from 'react';
import renderer from 'react-test-renderer';
import { SearchSummaryContainer } from '../SearchSummaryContainer';

jest.mock(
  '../../../components/searchSummary/SearchSummary',
  () => ({
    SearchSummary: 'SearchSummary',
  }),
);

describe('SearchSummaryContainer', () => {
  it('should be rendered correctly by default', () => {
    const tree = renderer
      .create(<SearchSummaryContainer />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be rendered correctly with specified total parameter', () => {
    const tree = renderer
      .create(<SearchSummaryContainer total={42} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

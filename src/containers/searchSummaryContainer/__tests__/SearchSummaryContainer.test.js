import React from 'react';
import renderer from 'react-test-renderer';
import SearchSummaryContainerConnected, { SearchSummaryContainer } from '../SearchSummaryContainer';

jest.mock(
  '../../../components/searchSummary/SearchSummary',
  () => ({
    SearchSummary: 'SearchSummary',
  }),
);

jest.mock('react-redux', () => ({
  connect: mapStateToProps => (Component) => {
    const state = {
      searchResults: {
        data: [],
        pagination: {
          total_count: 100,
        },
        meta: {},
        isLoading: false,
        isFetchingMore: false,
        error: null,
      },
    };
    const propsFromState = mapStateToProps(state);
    return () => <Component {...propsFromState} />;
  },
}));

describe('SearchSummaryContainer', () => {
  it('should be rendered correctly by default', () => {
    const tree = renderer
      .create(<SearchSummaryContainer />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be rendered and connected correctly by default', () => {
    const tree = renderer
      .create((
        <SearchSummaryContainerConnected />
      ))
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

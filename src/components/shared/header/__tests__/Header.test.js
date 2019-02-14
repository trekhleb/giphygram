import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from '../Header';

jest.mock('../../../../containers/searchForm/SearchFormContainer', () => ({
  SearchFormContainer: 'SearchFormContainer',
}));

describe('Header', () => {
  it('should be rendered correctly', () => {
    const tree = renderer
      .create(<Header />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

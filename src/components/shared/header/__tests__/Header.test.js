import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Header } from '../Header';

jest.mock('../../../../containers/searchForm/SearchFormContainer', () => ({
  SearchFormContainer: 'SearchFormContainer',
}));

describe('Header', () => {
  it('should be rendered correctly', () => {
    const tree = renderer
      .create((
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      ))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

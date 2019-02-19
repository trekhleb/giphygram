import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Header } from '../Header';

jest.mock('../../../../containers/searchFormContainer/SearchFormContainer', () => ({
  SearchFormContainer: 'SearchFormContainer',
}));

describe('Header', () => {
  it('should be rendered correctly', () => {
    const component = renderer.create((
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    ));
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

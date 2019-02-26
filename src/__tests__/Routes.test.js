import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Routes } from '../Routes';
import { RouterService } from '../services/RouterService';

jest.mock('../services/RouterService');
jest.mock('../components/searchPage/SearchPage', () => ({
  SearchPage: () => 'SearchPage',
}));

describe('Routes', () => {
  it('should not launch the search when search param is empty in URL', () => {
    const searchMock = jest.fn();
    const updateSearchQueryMock = jest.fn();
    const routerService = new RouterService(null, null);

    const component = renderer.create((
      <MemoryRouter>
        <Routes
          routerService={routerService}
          updateSearchQuery={updateSearchQueryMock}
          search={searchMock}
        />
      </MemoryRouter>
    ));

    expect(searchMock).not.toHaveBeenCalled();
    expect(updateSearchQueryMock).not.toHaveBeenCalled();
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should launch the search when search param is not empty in URL', () => {
    const searchQuery = 'kitten';
    const searchMock = jest.fn();
    const updateSearchQueryMock = jest.fn();
    const routerService = new RouterService(null, null);
    routerService.getSearchQuery.mockImplementation(() => searchQuery);

    const component = renderer.create((
      <MemoryRouter>
        <Routes
          routerService={routerService}
          updateSearchQuery={updateSearchQueryMock}
          search={searchMock}
        />
      </MemoryRouter>
    ));

    expect(searchMock).toHaveBeenCalledTimes(1);
    expect(searchMock).toHaveBeenCalledWith({ query: searchQuery });

    expect(updateSearchQueryMock).toHaveBeenCalledTimes(1);
    expect(updateSearchQueryMock).toHaveBeenLastCalledWith(searchQuery);

    expect(component.toJSON()).toMatchSnapshot();
  });
});

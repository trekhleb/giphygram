import {
  SEARCH_ACTION_TYPES,
  search,
  searchMore,
  searchReset,
} from '../searchActions';
import searchResultsMock from '../../mocks/searchResults';
import { SEARCH_PARAMS_ACTION_TYPES } from '../searchParamsActions';
import { getSearchResultsFromState } from '../../reducers/searchResultsReducer';
import { getSearchParamsFromState } from '../../reducers/searchParamsReducer';

jest.mock('../../services/GiphyService');
jest.mock('../../reducers/searchParamsReducer');
jest.mock('../../reducers/searchResultsReducer');

describe('searchActions', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    getSearchResultsFromState.mockImplementation(() => ({
      data: [],
      pagination: {
        total_count: 100,
        count: 5,
        offset: 0,
      },
      isLoading: false,
      isFetchingMore: false,
    }));

    getSearchParamsFromState.mockImplementation(() => ({
      query: 'kittens',
      offset: 0,
    }));
  });

  it('should generate search action', () => {
    const searchParams = {
      query: 'kitten',
    };
    const { payload, type } = search(searchParams);

    expect(type).toBe(SEARCH_ACTION_TYPES.SEARCH);
    expect(payload).toBeDefined();

    return expect(payload).resolves.toBe(searchResultsMock);
  });

  it('should generate search reset action', () => {
    const { type, payload } = searchReset();
    expect(type).toBe(SEARCH_ACTION_TYPES.SEARCH_RESET);
    expect(payload).toBeNull();
  });

  it('should generate search more action', () => {
    const dispatchMock = jest.fn();
    const getStateMock = jest.fn();

    // Do search more action.
    const batchSize = 50;
    searchMore(batchSize)(dispatchMock, getStateMock);

    // We expect that searchMore should dispatch two actions.
    expect(dispatchMock).toHaveBeenCalledTimes(2);
    expect(dispatchMock.mock.calls[0][0]).toEqual({
      type: SEARCH_PARAMS_ACTION_TYPES.UPDATE_SEARCH_OFFSET,
      payload: batchSize,
    });
    expect(dispatchMock.mock.calls[1][0].type).toBe(SEARCH_ACTION_TYPES.SEARCH_MORE);

    return expect(dispatchMock.mock.calls[1][0].payload).resolves.toBe(searchResultsMock);
  });

  it('should not generate search more action if there are no additional items on server', () => {
    const dispatchMock = jest.fn();
    const getStateMock = jest.fn();

    // Do search more action.
    // According to the mock there is only 100 items on the server.
    // Let's try to fetch items starting from offset 200.
    const batchSize = 200;
    searchMore(batchSize)(dispatchMock, getStateMock);

    // We expect that searchMore should not dispatch any actions.
    expect(dispatchMock).not.toHaveBeenCalled();
  });

  it('should not fetch more results if they are already loading', () => {
    getSearchResultsFromState.mockImplementation(() => ({
      data: [],
      pagination: {
        total_count: 100,
        count: 5,
        offset: 0,
      },
      isLoading: false,
      isFetchingMore: true,
    }));

    const dispatchMock = jest.fn();
    const getStateMock = jest.fn();

    // Do search more action.
    const batchSize = 50;
    searchMore(batchSize)(dispatchMock, getStateMock);

    // We expect that searchMore should not dispatch any actions.
    expect(dispatchMock).not.toHaveBeenCalled();
  });

  it('should not fetch more results if initial search is loading', () => {
    getSearchResultsFromState.mockImplementation(() => ({
      data: [],
      pagination: {
        total_count: 100,
        count: 5,
        offset: 0,
      },
      isLoading: true,
      isFetchingMore: false,
    }));

    const dispatchMock = jest.fn();
    const getStateMock = jest.fn();

    // Do search more action.
    const batchSize = 50;
    searchMore(batchSize)(dispatchMock, getStateMock);

    // We expect that searchMore should not dispatch any actions.
    expect(dispatchMock).not.toHaveBeenCalled();
  });
});

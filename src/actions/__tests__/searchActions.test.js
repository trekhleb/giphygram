import {
  SEARCH_ACTION_TYPES,
  search,
  searchMore,
  searchReset,
} from '../searchActions';
import searchResultsMock from '../../mocks/searchResults';
import { SEARCH_PARAMS_ACTION_TYPES } from '../searchParamsActions';

jest.mock('../../services/GiphyService');
jest.mock('../../reducers/searchParamsReducer', () => ({
  getSearchParamsFromState: () => ({
    query: 'kittens',
    offset: 0,
  }),
}));

describe('searchActions', () => {
  beforeEach(() => {
    // Reset all cross-tests side-effects.
    jest.clearAllMocks();
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
});

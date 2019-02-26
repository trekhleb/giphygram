import { RouterService } from '../RouterService';

describe('RouterService', () => {
  it('should push search query to URL', () => {
    const historyPush = jest.fn();
    const history = {
      push: historyPush,
    };
    const location = {};
    const routerService = new RouterService(history, location);

    expect(historyPush).not.toHaveBeenCalled();

    // Push empty query to URL.
    routerService.pushSearchQuery('');
    expect(historyPush).toHaveBeenCalledTimes(1);
    expect(historyPush).toHaveBeenCalledWith({
      search: '',
    });

    routerService.pushSearchQuery('kitten');
    expect(historyPush).toHaveBeenCalledTimes(2);
    expect(historyPush.mock.calls[1][0]).toEqual({
      search: '?query=kitten',
    });
  });

  it('should extract search query from URL GET params', () => {
    const queryString = 'kitten';
    const history = {};
    const location = {
      search: `?query=${queryString}`,
    };
    const routerService = new RouterService(history, location);
    const query = routerService.getSearchQuery();
    expect(query).toBe(queryString);
  });
});

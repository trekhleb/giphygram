const SEARCH_QUERY_PARAM = 'query';

export class RouterService {
  constructor(history, location) {
    this.history = history;
    this.location = location;
  }

  pushSearchQuery(query = '') {
    this.history.push({
      search: query ? `?${SEARCH_QUERY_PARAM}=${query}` : '',
    });
  }

  getSearchQuery() {
    const searchParams = new URLSearchParams(this.location.search);
    return searchParams.get(SEARCH_QUERY_PARAM);
  }
}

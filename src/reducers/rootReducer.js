import { combineReducers } from 'redux';
import { searchResultsReducer } from './searchResultsReducer';
import { searchParamsReducer } from './searchParamsReducer';

// Root reducer will serve as a container for other reducers.
export const rootReducer = combineReducers({
  searchResults: searchResultsReducer,
  searchParams: searchParamsReducer,
});

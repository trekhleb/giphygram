import { combineReducers } from 'redux';
import { searchResultsReducer } from './searchResultsReducer';
import { searchParamsReducer } from './searchParamsReducer';
import { layoutReducer } from './layoutReducer';

// Root reducer will serve as a container for other reducers.
export const rootReducer = combineReducers({
  searchResults: searchResultsReducer,
  searchParams: searchParamsReducer,
  layout: layoutReducer,
});

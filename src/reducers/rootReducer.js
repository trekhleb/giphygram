import { combineReducers } from 'redux';
import { giphyReducer } from './giphyReducer';
import { searchParamsReducer } from './searchParamsReducer';

// Root reducer will serve as a container for other reducers.
export const rootReducer = combineReducers({
  giphy: giphyReducer,
  searchParams: searchParamsReducer,
});

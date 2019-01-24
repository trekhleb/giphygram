import { combineReducers } from 'redux';
import { giphyReducer } from './giphyReducer';
import { searchParamsReducer } from './searchParamsReducer';

export const rootReducer = combineReducers({
  giphy: giphyReducer,
  searchParams: searchParamsReducer,
});

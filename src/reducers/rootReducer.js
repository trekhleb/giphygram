import { combineReducers } from 'redux';
import { giphyReducer } from './giphyReducer';
import { searchReducer } from './searchReducer';

export const rootReducer = combineReducers({
  giphy: giphyReducer,
  search: searchReducer,
});

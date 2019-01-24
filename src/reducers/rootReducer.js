import { combineReducers } from 'redux';
import { giphyReducer } from './giphyReducer';

export const rootReducer = combineReducers({
  giphy: giphyReducer
});

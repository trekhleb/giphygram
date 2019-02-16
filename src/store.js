import { applyMiddleware, createStore, compose } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';

// Add support of browser Redux debugger.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Add middleware to be able to use promises and chains of actions.
const middleware = applyMiddleware(
  promise(), // Allows to put promise() into action.payload.
  thunk, // Allows to dispatch(function()) that will accept `dispatch` as a parameter.
);

// Create Redux store for the application.
export const store = createStore(
  rootReducer,
  composeEnhancers(middleware),
);

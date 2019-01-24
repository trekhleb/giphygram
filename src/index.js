import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { store } from './store';

// Get the container for React application.
const rootContainer = document.getElementById('root');

// Render the application.
ReactDOM.render(
  <App store={store}/>,
  rootContainer
);

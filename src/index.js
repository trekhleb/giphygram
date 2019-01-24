import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { store } from './store';

const rootContainer = document.getElementById('root');

ReactDOM.render(
  <App store={store}/>,
  rootContainer
);

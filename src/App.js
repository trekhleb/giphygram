import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import RoutesConnected from './Routes';
import { Header } from './components/shared/header/Header';
import { storePropType } from './types/reduxTypes';
import { APP_BASE_URL } from './config';
import 'open-iconic/font/css/open-iconic-bootstrap.min.css';
import LayoutContainerConnected from './containers/layoutContainer/LayoutContainer';

export class App extends React.Component {
  static propTypes = {
    store: storePropType.isRequired,
  };

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <BrowserRouter basename={APP_BASE_URL}>
          <LayoutContainerConnected>
            <Header />
            <RoutesConnected />
          </LayoutContainerConnected>
        </BrowserRouter>
      </Provider>
    );
  }
}

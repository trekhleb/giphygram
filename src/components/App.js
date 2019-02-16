import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Layout } from './shared/layout/Layout';
import { Routes } from './Routes';
import { Header } from './shared/header/Header';
import 'open-iconic/font/css/open-iconic-bootstrap.min.css';
import { storePropType } from '../types/reduxTypes';
import { APP_BASE_URL } from '../config/system';

export class App extends React.Component {
  static propTypes = {
    store: storePropType.isRequired,
  };

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <BrowserRouter basename={APP_BASE_URL}>
          <Layout>
            <Header />
            <Routes />
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

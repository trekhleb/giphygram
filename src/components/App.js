import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout } from './shared/layout/Layout';
import { Routes } from './Routes';
import { Header } from './shared/header/Header';
import 'open-iconic/font/css/open-iconic-bootstrap.min.css';

export class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Header />
            <Routes />
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout } from './shared/layout/Layout';
import { Routes } from './Routes';
import { Footer } from './shared/footer/Footer';
import { Header } from './shared/header/Header';

export class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    const {store} = this.props;

    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Header/>
            <Routes/>
            <Footer/>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

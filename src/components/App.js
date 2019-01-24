import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout } from './shared/Layout';
import { Routes } from './Routes';
import { Footer } from './shared/Footer';
import { Header } from './shared/Header';

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

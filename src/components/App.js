import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './shared/Layout';
import { Routes } from './Routes';
import { Footer } from './shared/Footer';
import { Header } from './shared/Header';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Header/>
          <Routes/>
          <Footer/>
        </Layout>
      </BrowserRouter>
    );
  }
}

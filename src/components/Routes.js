import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

const RoutesRaw = () => (
  <Switch>
    <Route path='/' exact component={Home}/>
    <Route component={NotFound}/>
  </Switch>
);

export const Routes = withRouter(RoutesRaw);

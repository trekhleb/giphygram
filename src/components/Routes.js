import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Home } from './home/Home';

const RoutesRaw = () => (
  <Switch>
    <Route path='/' component={Home}/>
  </Switch>
);

export const Routes = withRouter(RoutesRaw);

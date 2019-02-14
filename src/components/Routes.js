import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Home } from './home/Home';

// Currently we have only one route. But the next step of the App development might be to create
// a dedicated pages for each GIF with additional details. Or to display most trending GIFs
// on the /home and search results on the /search page.
const RoutesRaw = () => (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
);

export const Routes = withRouter(RoutesRaw);

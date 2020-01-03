import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoadableHomePage } from './routes';
import { App } from '../components/App';

export const Router = () => (
  <App>
    <Switch>
      <Route exact path="/">
        <LoadableHomePage />
      </Route>
    </Switch>
  </App>
);

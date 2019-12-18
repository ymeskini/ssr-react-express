import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoadableTopPage } from './routes';
import { App } from '../components/App';

export const Router = () => (
  <App>
    <Switch>
      <Route exact path="/">
        <LoadableTopPage />
      </Route>
    </Switch>
  </App>
);

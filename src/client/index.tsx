import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import * as Loadable from 'react-loadable';
import { configureStore, history } from './store/configureStore';

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/public/service-worker.js');
  });
}

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
const initialData = JSON.parse(document.getElementById('initial-data')!.getAttribute('data-json')!);
const store = configureStore(initialData);

const render = () => {
  const { Router } = require('./Router');

  renderMethod(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
};

Loadable.preloadReady().then(() => {
  if (module.hot) {
    module.hot.accept('./Router', () => {
      render();
    });
  }

  render();
});

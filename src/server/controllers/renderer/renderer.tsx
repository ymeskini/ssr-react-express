import { resolve } from 'path';
import { Request, Response } from 'express';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToNodeStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';
import { ChunkExtractor } from '@loadable/server';
import { Router } from '../../../client/router/index';
import { configureStore } from '../../../client/store/configureStore';
import { getLoadableStatsPath } from './getLoadableStatsPath';

const escape = (str: string) => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

const statsFile = resolve(__dirname, getLoadableStatsPath(process.env.NODE_ENV));

export async function get(req: Request, res: Response) {
  const { store } = configureStore();
  const sheet = new ServerStyleSheet();
  const context = {};

  const App = () => (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        {/* add `div` because of `hydrate` */}
        <div id="root">
          <Router />
        </div>
      </StaticRouter>
    </Provider>
  );

  const preloadedState = JSON.stringify(store.getState());
  const initialState = escape(preloadedState);

  const extractor = new ChunkExtractor({ statsFile });
  const helmetContent = Helmet.renderStatic();
  const meta = `
      ${helmetContent.meta.toString()}
      ${helmetContent.title.toString()}
    `.trim();

  res.write(
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Description" content="introducing SPA and SSR">
        ${meta}
      </head>
      <body>
        <script id="initial-data" type="text/plain" data-json="${initialState}"></script>
  `.trim()
  );

  const jsx = sheet.collectStyles(<App />);
  const stream = sheet.interleaveWithNodeStream(renderToNodeStream(jsx));
  stream.pipe(res, { end: false });
  stream.on('end', () => {
    res.write(`
    ${extractor.getScriptTags()}</body></html>`);
    res.end();
  });
}

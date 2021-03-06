/* eslint @typescript-eslint/no-var-requires: 0 */

import { createServer } from 'http';
import express from 'express';
import compression from 'compression';
import { router } from './router';

export function runServer() {
  const app = express();
  const port = process.env.PORT || 4444;

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // compression
  app.use(compression({ level: 5 }));

  // HMR
  if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const config = require('../../configs/webpack.client.config');
    const compiler = webpack(config);

    app.use(webpackHotMiddleware(compiler));
    app.use(
      webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        writeToDisk(filePath: string) {
          return /loadable-stats/.test(filePath);
        }
      })
    );
  }

  // register routes
  router(app);

  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'test') {
    const server = createServer(app);

    server.listen(port, () => {
      console.log(`Listening on ${port}`);
    });

    // https://stackoverflow.com/a/48710483/7014700
    server.on('error', (err: NodeJS.ErrnoException) => {
      if (err.syscall !== 'listen') throw err;

      const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

      switch (err.code) {
        case 'EACCES':
          console.error(`${bind} requires elevated privileges`);
          process.exit(1);
          break;
        case 'EADDRINUSE':
          console.error(`${bind} is already in use`);
          process.exit(1);
          break;
        default:
          throw err;
      }
    });
  }

  return app;
}

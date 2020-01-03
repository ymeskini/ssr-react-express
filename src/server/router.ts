import * as express from 'express';
import * as renderer from './controllers/renderer';

export function router(app: express.Application) {
  app.use('/public', express.static('dist/client'));
  app.get('*', renderer.get);
}

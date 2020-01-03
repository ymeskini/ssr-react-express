import { join } from 'path';
import { config } from 'dotenv';
import { runServer } from './server';

const isProd = process.env.NODE_ENV === 'production';

config({
  path: isProd ? join(__dirname, '../../../.env.prod') : join(__dirname, '../../.env.dev')
});

runServer();

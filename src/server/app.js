import Koa from 'koa';
// import cookie from 'koa-cookie';
import appFire from './firebase/fire.js'; // Инициализация Firebase
import dotenv from './utils/dotenv/index.js';
import middleware from './middleware/index.js';
// Functions
import { logServer } from './libs/logs/index.js';
// Helpers
import { objectFieldsToString } from '../utils/objects/object-fields-to-string/index.js';

console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);


const app = new Koa();

app.use(async (ctx, next) => {
  try {
    await next();
  }
  catch (err) {
    logServer.error(`logServer: ${objectFieldsToString(err)}`);

    if (err.status) {
      ctx.status = err.status;
      ctx.body = {error: err.message};
    }
    else {
      console.error(err);
      ctx.status = 500;
      ctx.body = {error: 'Internal server error'};
    }
  }
});


middleware(app);

export default app;

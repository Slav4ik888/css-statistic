import { logUser } from '../../../libs/logs/index.js';
import { objectFieldsToString } from '../../../../utils/objects/index.js';


// Clear cookie
export default async function userLogout(ctx, next) {
  try {
    ctx.cookies.set(`session`, ``)
    ctx.redirect('/login');
    logUser.info(`[userLogout] - ${ctx.request.body.email} вышел`);
  }
  catch (err) {
    logUser.error(`[userLogout] - [${ctx.request.body.email}] - ${objectFieldsToString(err)}`);
    ctx.status = 500;
    ctx.body = { general: err.code };
  }
};



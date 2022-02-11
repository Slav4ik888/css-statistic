import { admin, db } from './admin.js';
import { logAuth } from '../libs/logs/index.js';
import { getCookies } from '../libs/get-cookies/get-cookies.js';
import NotAutorized from '../libs/errors/not-authorized.js';
import TEMP from '../../templates/errors/template-errors.js';



export default async function (ctx, next) {
  try {
    getCookies(ctx);
    const sessionCookie = ctx.cookie.cssSession || '';
    // Verify the session cookie. In this case an additional check is added to detect
    // if the user's Firebase session was revoked, user deleted/disabled, etc.
    
    if (!sessionCookie) throw new NotAutorized(TEMP.auth.cookieNotAuth);

    ctx.state.user = await admin.auth().verifySessionCookie(sessionCookie, true /** checkRevoked */);
        
    return next();
  }
  catch(err) {
  // 'auth/id-token-expired'
    logAuth.error(`[FBAuth] - oшибка в верификации sessionCookie: ${err.code}`)
    throw new NotAutorized(`Ошибка в верификации сессии`)
  };
};


import { admin } from '../../../firebase/admin.js';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// Validations
import validLoginData from '../../../../utils/validators/login-data/login-data.js';
// Functions
import { logUser } from '../../../libs/logs/index.js';
// Helpers
import { objectFieldsToString } from '../../../../utils/objects/object-fields-to-string/object-fields-to-string.js';
// Consts
import ERR_TEMP from '../../../../templates/errors/template-errors.js';
import { cfg } from '../../../../../config.js';



export default async function userLogin(ctx, next) {
  const user = {
    email    : ctx.request?.body?.userData?.email,
    password : ctx.request?.body?.userData?.password
  };

  try {
    const { valid, errors } = validLoginData(user);
    if (!valid) {
      logUser.error(`[userLogin] - ${objectFieldsToString(errors)}`);
      ctx.status = 400; ctx.body = errors; return;
    }
    
    // Проверяем является ли пользователь удалённым (отключенным)
    const userRecord = await admin.auth().getUserByEmail(user.email);
    if (userRecord.disabled) {
      logUser.error(`[userLogin] - ${ERR_TEMP.auth.accountDisabled}`);
      ctx.status = 403; ctx.body = { general: ERR_TEMP.auth.accountDisabled }; return;
    }

    const auth = getAuth();
    const userData = await signInWithEmailAndPassword(auth, user.email, user.password);
    const idToken = await userData.user.getIdToken();

    const csrfToken = ctx.request.body?.csrfToken ? ctx.request.body?.csrfToken.toString() : ``;

    // Guard against CSRF attacks.
    if (ctx.request?.cookies && csrfToken) {
      if (csrfToken !== ctx.request.cookies.csrfToken) {
        logUser.error(`[userLogin] - [${user.email}] - Guard against CSRF attacks`);
        ctx.status = 401; ctx.body = { general: ERR_TEMP.auth.unauthorizedRequest };return;
      }
    }

    // Set session expiration to 12 days.
    const expiresIn = 60 * 60 * 24 * 12 * 1000;

    // Create the session cookie. This will also verify the ID token in the process.
    // The session cookie will have the same claims as the ID token.
    // To only allow session cookie setting on recent sign-in, auth_time in ID token
    // can be checked to ensure user was recently signed in before creating a session cookie.
    const sessionCookie = await admin.auth().createSessionCookie(idToken, { expiresIn });

    // Set cookie policy for session cookie.
    // ADD secure: true, когда будет https
    const options = { maxAge: expiresIn, httpOnly: true, path: '/' };
    ctx.cookies.set('cssSession', sessionCookie, options);
    ctx.body = { message : `Добро пожаловать в «${cfg.SITE_TITLE.full}»!` };

    logUser.info(`[userLogin] - ${user.email} вошёл`);
  }
  catch (err) {
    switch (err.code) {
      case `auth/user-not-found`:
        logUser.error(`[userLogin] - [${user.email}] - ${ERR_TEMP.auth.unknownUserEmail}`);
        ctx.status = 403;
        ctx.body = { email: ERR_TEMP.auth.unknownUserEmail };
        return;
      
      case `auth/wrong-password`:
        logUser.error(`[userLogin] - [${user.email}] - Не верный пароль...`);
        ctx.status = 403;
        ctx.body = { password: ERR_TEMP.auth.passwordWrong };
        return;
        
      default:
        logUser.error(`[userLogin] - [${user.email}] - ${err}`);
        ctx.status = 500;
        ctx.body = { general: ERR_TEMP.general };
    }
  }
}

import { db } from '../../../firebase/admin.js';
import { logUser } from '../../../libs/logs/index.js';
// Helpers
import { objectFieldsToString } from '../../../../utils/objects/object-fields-to-string/index.js';
// Consts
import ERR_TEMP from '../../../../templates/errors/template-errors.js';




export default async function getUser(ctx, next) {
  const user = ctx.state.user;

  // iss: 'https://session.firebase.google.com/rules-knowledge-base',
  // aud: 'rules-knowledge-base',
  // auth_time: 1632399071,
  // email: 'korzan.va@mail.ru',
  // email_verified: false,
  // uid: 'zRAjGWcBrHdtu5KSxUWBvGbgR0U2'
  
  try {
    const userRes = await db.collection(`users`).doc(user.email).get();
    
    let userData = {};

    if (userRes.exists) userData = userRes.data();

    ctx.status = 200;
    ctx.body = userData;
    logUser.info(`[getUser] - [${user.email}] success!`);
  }
  catch (err) {
    switch (err.code) {
      case `auth/user-not-found`:
        logUser.error(`[getUser] - [${user.email}] - ${ERR_TEMP.auth.unknownUserEmail}`);
        ctx.status = 403;
        ctx.body = { email: ERR_TEMP.auth.unknownUserEmail };
        return;
      
      case `auth/wrong-password`:
        logUser.error(`[getUser] - [${user.email}] - Не верный пароль...`);
        ctx.status = 403;
        ctx.body = { password: ERR_TEMP.auth.passwordWrong };
        return;
        
      default:
        logUser.error(`[getUser] - [${user.email}] - ${err}`);
        ctx.status = 500;
        ctx.body = { general: ERR_TEMP.general };
    }
  }
}
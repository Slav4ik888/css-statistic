// Firebase
import { db } from '../../../firebase/admin.js';
import { getCollection } from '../../helpers/index.js';
// Helpers
import { logAuth } from '../../../libs/logs/index.js';
import { objectFieldsToString } from '../../../../utils/objects/object-fields-to-string/object-fields-to-string.js';
// Credantials
import { CredName as Cr, cred } from '../../../../utils/credentials/backend.js';
import { loadRoleCreds } from '../auth/index.js';
// Consts
import ERR_TEMP from '../../../../templates/errors/template-errors.js';


export default async function getStartResourses(ctx, next) {
  const email = ctx.state.user.email;
  const logTemp = `[getStartResourses] - [${email}]`;

  try {
    // ------  User profile  ------ //

    let user = {};
    const userRes = await db.collection(`users`).doc(email).get();
    if (userRes.exists) user = userRes.data();

    // ------  Credentials  ------- //
    const roleCreds = await loadRoleCreds(user);
    console.log('roleCreds: ', roleCreds);
    
    // ---------  Roles  ---------- //
    const roles = await getCollection(`roles`, email);
    console.log('roles: ', roles.length);
    
    // ---------  Users  ---------- //
    const users = await getCollection(`users`, email);
    console.log('users: ', users.length);


    ctx.status = 200;
    ctx.body = { user, users, roleCreds, roles };
    logAuth.info(`${logTemp} success!`);
  }
  catch (err) {
    console.log('111 err: ', err);
    logAuth.error(`${logTemp} ${objectFieldsToString(err)}`);
    ctx.status = 500;
    ctx.body = { general: ERR_TEMP.general };
  }
}
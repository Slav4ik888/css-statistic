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

    let roleCreds = await loadRoleCreds(user);
    console.log('roleCreds: ', roleCreds);
    
    // ------  Weeks  ------------- //

    let weeks = [];
    if (cred(Cr.PLAN_R, user, roleCreds))
      weeks = await getCollection(`weeks`, email);

    // ------  Roles  ------------- //

    const roles = await getCollection(`roles`, email);


    ctx.status = 200;
    ctx.body = { user, roles, weeks, roleCreds };
    logAuth.info(`${logTemp} success!`);
  }
  catch (err) {
    console.log('111 err: ', err);
    logAuth.error(`${logTemp} ${objectFieldsToString(err)}`);
    ctx.status = 500;
    ctx.body = { general: ERR_TEMP.general };
  }
}
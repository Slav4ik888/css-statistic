// Firebase
import { db } from '../../../firebase/admin.js';
// Helpers
import { logUser } from '../../../libs/logs/index.js';
import { objectFieldsToString } from '../../../../utils/objects/object-fields-to-string/object-fields-to-string.js';
// Validation
// Credantials
import getUserRoleId from '../../../../utils/credentials/get-user-role-id/index.js';
// Consts
import ERR_TEMP from '../../../../templates/errors/template-errors.js';


export default function getCredentialsByRole(user) {
  
  try {
    let credentials = {};

    const roleId = getUserRoleId(user);
    
    if (roleId) {
      const credRes  = await db.collection(`credentials`).doc(roleId).get();
      if (credRes.exists) credentials = credRes.data();
    }

    return credentials;
  }
  catch (err) {
    logUser.error(`${logTemp} ${objectFieldsToString(err)}`);
    ctx.status = 500;
    ctx.body = { general: ERR_TEMP.general };
  }
}
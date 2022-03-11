import { db } from '../../../firebase/admin.js';
import { logRef } from '../../../libs/logs/index.js';
import { objectFieldsToString } from '../../../../utils/objects/object-fields-to-string/index.js';
import { getNewRole } from './get-new-role/get-new-role.js';
import ERR_TEMP from '../../../../templates/errors/template-errors.js';


export async function addRole(ctx, next) {
  const user = ctx.state.user;
  const logTemp = `[addRole] - [${user.email}]`;

  try {
    const role = getNewRole(user.uid);

    const doc = await db.collection(`roles`).add(role);
    role.id = doc.id;

    await db.collection(`roles`).doc(doc.id).update({ id: doc.id });
    
    ctx.status = 200;
    ctx.body = { role };
    logRef.info(`${logTemp} success!`);
  }
  catch (err) {
    logRef.error(`${logTemp} ${objectFieldsToString(err)}`);
    ctx.status = 500;
    ctx.body = { general: ERR_TEMP.general };
  }
}

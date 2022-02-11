import { db } from '../../firebase/admin.js';
import { getCollection } from '../helpers/index.js';
import { logData } from '../../libs/logs/index.js';
// Helpers
import { objectFieldsToString } from '../../../utils/objects/object-fields-to-string/object-fields-to-string.js';
import ERR_TEMP from '../../../templates/errors/template-errors.js';


export async function addRole(ctx, next) {
  const user = ctx.state.user;
  const email = user.email;
  const logTemp = `[addRole] - [${email}]`;

  try {

    const role = ctx.request?.body.role;
    // TODO: validate role
    role.createdAt = new Date().toISOString();

    const roleDoc = await db.collection(`roles`).add(role);
    role.id = roleDoc.id;

    await db.collection(`roles`).doc(role.id).update({ id: role.id });

    ctx.status = 200;
    ctx.body = { role };
    logData.info(`${logTemp} success!`);
  }
  catch (err) {
    logData.error(`${logTemp} ${objectFieldsToString(err)}`);
    ctx.status = 500;
    ctx.body = { general: ERR_TEMP.general };
  }
}

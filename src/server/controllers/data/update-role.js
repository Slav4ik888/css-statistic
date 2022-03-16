import { db } from '../../firebase/admin.js';
import { getCollection } from '../helpers/index.js';
import { logData } from '../../libs/logs/index.js';
// Helpers
import { objectFieldsToString } from '../../../utils/objects/object-fields-to-string/index.js';
import ERR_TEMP from '../../../templates/errors/template-errors.js';


export async function updateRole(ctx, next) {
  const user    = ctx.state.user;
  const email   = user.email;
  const logTemp = `[updateRole] - [${email}]`;

  try {
    const role = ctx.request?.body.role;
    // TODO: validate role
    role.lastChange = new Date().toISOString();

    await db.collection(`roles`).doc(role.id).update(role);

    ctx.status = 200;
    ctx.body = { role, message: `Изменения сохранены` };
    logData.info(`${logTemp} success!`);
  }
  catch (err) {
    logData.error(`${logTemp} ${objectFieldsToString(err)}`);
    ctx.status = 500;
    ctx.body = { general: ERR_TEMP.general };
  }
}

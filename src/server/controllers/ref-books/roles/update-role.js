import { db } from '../../../firebase/admin.js';
import { logRef } from '../../../libs/logs/index.js';
import validRoleData from '../../../../utils/validators/roles-data/roles-data.js';
import { objectFieldsToString } from '../../../../utils/objects/object-fields-to-string/index.js';
import { getUpdatedRole } from './get-updated-role/get-updated-role.js';
import ERR_TEMP from '../../../../templates/errors/template-errors.js';



export async function updateRole(ctx, next) {
  const user = ctx.state.user;
  const logTemp = `[updateRole] - [${user.email}]`;

  try {
    const roleData = ctx.request?.body;

    const { valid, errors } = validRoleData(roleData);
    if (!valid) {
      logRef.error(`${logTemp} ${objectFieldsToString(errors)}`);
      ctx.status = 400; ctx.body = { errors }; return;
    }

    const dbRef = db.collection(`roles`);

    const roleRes = await dbRef.doc(roleData.id).get();

    if (!roleRes.exists) { // Например, кто-то успел удалить до того, как другой обновил
      logRef.error(`${logTemp} ${ERR_TEMP.auth.roleNotFound}`);
      ctx.status = 400;
      ctx.body = { message: ERR_TEMP.auth.roleNotFound };
      return;
    }

    const role = getUpdatedRole(roleData, user.uid);

    await dbRef.doc(role.id).update(role);

    ctx.status = 200;
    ctx.body = { role, message: `Данные роли сохранены` };
    logRef.info(`${logTemp} success!`);
  }
  catch (err) {
    logRef.error(`${logTemp} ${objectFieldsToString(err)}`);
    ctx.status = 500;
    ctx.body = { general: ERR_TEMP.general };
  }
}
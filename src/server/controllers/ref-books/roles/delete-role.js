import { db } from '../../../firebase/admin.js';
import { logRef } from '../../../libs/logs/index.js';
import { objectFieldsToString } from '../../../../utils/objects/object-fields-to-string/index.js';
import ERR_TEMP from '../../../../templates/errors/template-errors.js';


export async function deleteRole(ctx, next) {
  const user = ctx.state.user;
  const logTemp = `[deleteRole] - [${user.email}]`;

  try {
    const roleId = ctx.request?.body.roleId;
    const dbRef = db.collection(`roles`);

    // Проверяем есть ли запрошенная роль в базе, или например, кто-то успел удалить до того, как другой это начал
    const contactRes = await dbRef.doc(roleId).get();

    if (!contactRes.exists) {
      logRef.error(`${logTemp} ${ERR_TEMP.auth.roleNotFound}`);
      ctx.status = 400;
      ctx.body = { message: ERR_TEMP.auth.roleNotFound };
      return;
    }

    await dbRef.doc(roleId).delete();

    ctx.status = 200;
    ctx.body = { message: `Роль удалена` };
    logRef.info(`${logTemp} ${contactRes.data().label} success!`);
  }
  catch (err) {
    logRef.error(`${logTemp} ${objectFieldsToString(err)}`);
    ctx.status = 500;
    ctx.body = { general: ERR_TEMP.general };
  }
}
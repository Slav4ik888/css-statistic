import { getRef, res } from '../../helpers/index.js';
import { logRef } from '../../../libs/logs/index.js';
import { objectFieldsToString } from '../../../../utils/objects/object-fields-to-string/index.js';
import ERR_TEMP from '../../../../templates/errors/template-errors.js';
import { DbRef } from '../../../../types/types.js';


export async function deleteRole(ctx, next) {
  const
    email   = ctx.state.user.email,
    id      = ctx.request?.body?.roleId,
    logTemp = `[deleteRole] - [${email}]`;

  try {
    // TODO: Check permissins

    // Проверяем есть ли запрошенная роль в базе, или например, кто-то успел удалить до того, как другой это начал
    const
      dbRef   = getRef(DbRef.ROLES, { id }),
      roleRes = await dbRef.get();

    if (!roleRes.exists) {
      logRef.error(`${logTemp} ${ERR_TEMP.auth.roleNotFound}`);
      ctx.throw(400, { message: ERR_TEMP.auth.roleNotFound });
    }

    await dbRef.delete();

    return res(ctx, 200, { message: `Роль удалена` }, logRef, `${logTemp} ${roleRes.data().label} success!`);
  }
  catch (err) {
    logRef.error(`${logTemp} ${objectFieldsToString(err)}`);
    ctx.throw(500, { general: ERR_TEMP.general });
  }
}

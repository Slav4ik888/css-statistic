import { db } from '../../../firebase/admin.js';
import { logRef } from '../../../libs/logs/index.js';
// Validations
import validate from '../../../../utils/validators/validate/index.js';
import { Validator } from '../../../../types/types.js';

import { getFixDateTemp } from '../../../../templates/db-schema/index.js';
import { objectFieldsToString } from '../../../../utils/objects/object-fields-to-string/index.js';
import { getUpdatedRole } from './get-updated-role/index.js';
import ERR_TEMP from '../../../../templates/errors/template-errors.js';
import { getRef, res } from '../../helpers/index.js';
import { DbRef } from '../../../../types/types.js';


export async function updateRole(ctx, next) {
  const
    userId   = ctx.state.user.uid,
    email    = ctx.state.user.email,
    logTemp  = `[updateRole] - [${email}]`;

  try {
    const
      roleData = ctx.request?.body?.role,
      dbRef    = getRef(DbRef.ROLES, roleData);

    const { valid, errors } = validate(Validator.ROLE_UPDATE, roleData);
    if (!valid) { logRef.error(`${logTemp} - ${objectFieldsToString(errors)}`); ctx.throw(400, errors); }

    // TODO: Check permissins: access only to the company`s own data

    const roleRes = await dbRef.get();
    if (!roleRes.exists) { // Например, кто-то успел удалить до того, как другой обновил
      logRef.error(`${logTemp} ${ERR_TEMP.auth.roleNotFound}`);
      ctx.throw(400, { message: ERR_TEMP.auth.roleNotFound });
    }

    const role = getUpdatedRole(roleData, userId);
    await dbRef.update(role);

    res(ctx, 200, { role: roleData, message: `Данные обновлены` }, logRef, `${logTemp} ${roleData.id} ${roleData.label} success!`);
  }
  catch (err) {
    logRef.error(`${logTemp} ${objectFieldsToString(err)}`);
    ctx.throw(500, { general: ERR_TEMP.general });
  }
}
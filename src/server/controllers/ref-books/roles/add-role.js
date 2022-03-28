import { db } from '../../../firebase/admin.js';
import { logRef } from '../../../libs/logs/index.js';
import { objectFieldsToString } from '../../../../utils/objects/object-fields-to-string/index.js';
import { getNewRole } from './get-new-role/index.js';
import ERR_TEMP from '../../../../templates/errors/template-errors.js';
import { getRef, res } from '../../helpers/index.js';
import { DbRef } from '../../../../types/types.js';


export async function addRole(ctx, next) {
  const
    userId  = ctx.state.user.uid,
    email   = ctx.state.user.email,
    logTemp = `[addRole] - [${email}]`;

  try {
    const
      role = getNewRole(userId),
      ref  = getRef(DbRef.ROLES_COLLECTION),
      doc  = await ref.add(role);

    role.id = doc.id;
    await ref.doc(role.id).update({ id: role.id });
    
    res(ctx, 200, { role }, logRef, `${logTemp} success!`);
  }
  catch (err) {
    logRef.error(`${logTemp} ${objectFieldsToString(err)}`);
    ctx.throw(500, { general: ERR_TEMP.general });
  }
}

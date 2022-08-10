import { db } from '../../../firebase/admin.js';
import { logRef } from '../../../libs/logs/index.js';
import { objectFieldsToString } from '../../../../utils/objects/object-fields-to-string/index.js';
import { mergeWithScheme } from '../../../../utils/merge-with-scheme/index.js';
// import { getUpdatedUser } from './get-updated-user/get-updated-user.js';
import ERR_TEMP from '../../../../templates/errors/template-errors.js';
import { userScheme } from '../../../../templates/schemes/index.js';
import { updatedLastChange } from '../../helpers/index.js';
import { Validator } from '../../../../types/types.js';
import validate from '../../../../utils/validators/validate/index.js';
import { createUpdatedKeys } from '../../../firebase/utils/index.js';



export async function updateUser(ctx, next) {
  const
    { user: { uid, email } } = ctx.state,
    logTemp  = `[updateRefUser] - [${email}]`,
    userData = ctx.request?.body?.userData;
  
  try {
    const { valid, errors } = validate(Validator.USER_UPDATE, userData);
    if (!valid) {
      logRef.error(`${logTemp} ${objectFieldsToString(errors)}`);
      ctx.status = 400; ctx.body = { errors }; return;
    }

    const
      dbRef   = db.collection(`users`),
      userRes = await dbRef.doc(userData.email).get();

    if (!userRes.exists) { // Например, кто-то успел удалить до того, как другой обновил
      logRef.error(`${logTemp} ${ERR_TEMP.auth.userNotFound}`);
      ctx.status = 400;
      ctx.body = { message: ERR_TEMP.auth.userNotFound };
      return;
    }

    const updated = updatedLastChange(mergeWithScheme(userData, userScheme), uid);
    delete updated.id;
    delete updated.email;

    await dbRef.doc(userData.email).update(createUpdatedKeys(updated));
    updated.id = userData.id;

    ctx.status = 200;
    ctx.body = { user: updated };
    logRef.info(`${logTemp} success!`);
  }
  catch (err) {
    logRef.error(`${logTemp} ${objectFieldsToString(err)}`);
    ctx.status = 500;
    ctx.body = { general: ERR_TEMP.general };
  }
}

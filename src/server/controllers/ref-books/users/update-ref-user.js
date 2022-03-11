import { db } from '../../../firebase/admin.js';
import { logRef } from '../../../libs/logs/index.js';
import validUserData from '../../../../utils/validators/user-data/user-data.js';
import { objectFieldsToString } from '../../../../utils/objects/object-fields-to-string/index.js';
import { getUpdatedUser } from './get-updated-user/get-updated-user.js';
import ERR_TEMP from '../../../../templates/errors/template-errors.js';



export async function updateRefUser(ctx, next) {
  const user = ctx.state.user;
  const logTemp = `[updateRefUser] - [${user.email}]`;

  try {
    const userData = ctx.request?.body;

    const { valid, errors } = validUserData(userData);
    if (!valid) {
      logRef.error(`${logTemp} ${objectFieldsToString(errors)}`);
      ctx.status = 400; ctx.body = { errors }; return;
    }

    const dbRef = db.collection(`users`);

    const userRes = await dbRef.doc(userData.email).get();

    if (!userRes.exists) { // Например, кто-то успел удалить до того, как другой обновил
      logRef.error(`${logTemp} ${ERR_TEMP.auth.userNotFound}`);
      ctx.status = 400;
      ctx.body = { message: ERR_TEMP.auth.userNotFound };
      return;
    }

    const updatedUser = getUpdatedUser(userData, user.uid);

    await dbRef.doc(userData.email).update(updatedUser);

    const mergedUser = Object.assign(userData, updatedUser);
    
    ctx.status = 200;
    ctx.body = { user: mergedUser, message: `Данные сохранены` };
    logRef.info(`${logTemp} success!`);
  }
  catch (err) {
    logRef.error(`${logTemp} ${objectFieldsToString(err)}`);
    ctx.status = 500;
    ctx.body = { general: ERR_TEMP.general };
  }
}

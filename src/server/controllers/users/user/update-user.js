import { admin, db } from '../../../firebase/admin.js';
// Functions
import { logUser } from '../../../libs/logs/index.js';
import validUserData from '../../../../utils/validators/user-data/user-data.js';
import getUpdatedUser from './get-updated-user/index.js';
// Helpers
import { objectFieldsToString } from '../../../../utils/objects/object-fields-to-string/object-fields-to-string.js';
// Consts
import ERR_TEMP from '../../../../templates/errors/template-errors.js';


export default async function updateUser(ctx, next) {
  const user = ctx.state.user;
  const logTemp = `[updateUser] - [${user.email}]`;
  try {
    const userData = ctx.request?.body;

    const { valid, errors } = validUserData(userData);
    if (!valid) {
      logUser.error(`${logTemp} ${objectFieldsToString(errors)}`);
      ctx.status = 400; ctx.body = { errors }; return;
    }

    const updated = getUpdatedUser(userData, user.uid);
    await db.collection(`users`).doc(user.email).update(updated);

    ctx.status = 200;
    ctx.body = { message: `Изменения сохранены` };
    logUser.info(`${logTemp} success!`);
  }
  catch {
    logUser.error(`${logTemp} ${objectFieldsToString(err)}`);
    ctx.status = 500;
    ctx.body = { general: ERR_TEMP.general };
  }
}




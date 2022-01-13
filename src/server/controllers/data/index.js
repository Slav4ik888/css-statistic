import { logData } from '../../libs/logs/index.js';
// Helpers
import { objectFieldsToString } from '../../../utils/objects/object-fields-to-string/object-fields-to-string.js';
import ERR_TEMP from '../../../templates/errors/template-errors.js';


export async function loadUsers(ctx, next) {
  const user = ctx.state.user;
  const email = user.email;
  const logTemp = `[loadUsers] - [${email}]`;

  try {
    const users = await getCollection(`users`, email);
    console.log('users: ', users);

    ctx.status = 200;
    ctx.body = { users };
    logData.info(`${logTemp} success!`);
  }
  catch (err) {
    logData.error(`${logTemp} ${objectFieldsToString(err)}`);
    ctx.status = 500;
    ctx.body = { general: ERR_TEMP.general };
  }
}

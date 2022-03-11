import { db } from '../../firebase/admin.js';
import { logHelpers } from '../../libs/logs/index.js';
import { objectFieldsToString } from '../../../utils/objects/index.js';
import ERR_TEMP from '../../../templates/errors/template-errors.js';


export async function getCollection(colName, email) {
  const logTemp = `[getCollection] - [${email}]`;

  try {
    let items = [];

    const snapshot = await db.collection(colName).get();
    snapshot.forEach((doc) => items.push(doc.data()));
    
    logHelpers.info(`${logTemp} success!`);
    return items;
  }
  catch (err) {
    logHelpers.error(`${logTemp} ${objectFieldsToString(err)}`);
    ctx.status = 500;
    ctx.body = { general: ERR_TEMP.general };
  }
}


export async function loadCollection(ctx, next) {
  const user           = ctx.state.user;
  const logTemp        = `[loadCollection] - [${user.email}]`;
  const colName        = ctx.request?.body?.colName;
  const successMessage = ctx.request?.body?.successMessage;

  try {
    let items = [];

    const snapshot = await db.collection(colName).get();
    snapshot.forEach((doc) => items.push(doc.data()));
    
    ctx.status = 200;
    ctx.body = { items, message: successMessage || `` };
    
    logHelpers.info(`${logTemp} success!`);
  }
  catch (err) {
    logHelpers.error(`${logTemp} ${objectFieldsToString(err)}`);
    ctx.status = 500;
    ctx.body = { general: ERR_TEMP.general };
  }
}
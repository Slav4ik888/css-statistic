// Firebase
import { db } from '../../../firebase/admin.js';
import { getCollection, res } from '../../helpers/index.js';
// Helpers
import { logRef } from '../../../libs/logs/index.js';
import { objectFieldsToString } from '../../../../utils/objects/index.js';
// Credantials
import { CredName, cred } from '../../../../utils/credentials/backend.js';
// Consts
import ERR_TEMP from '../../../../templates/errors/template-errors.js';



export async function loadRefbooksByList(ctx, next) {
  const email = ctx.state.user.email;
  const logTemp = `[loadRefbooksByList] - [${email}]`;

  try {
    let refBooks = [];
    const refBooksIds = ctx.request?.body?.refBooksIds;

    if (!refBooksIds) {
      logRef.error(`${logTemp} refBooksIds is empty...`);
      ctx.throw(400, { refBooks });
    }
    
    for await (let id of refBooksIds) {
      const refbook = await getCollection(id, email);
      const obj = { id, refbook };
      refBooks.push(obj);
    };

    return res(ctx, 200, { refBooks }, logRef, `${logTemp} success!`);
  }
  catch (err) {
    logRef.error(`${logTemp} ${objectFieldsToString(err)}`);
    ctx.status = 500;
    ctx.body = { general: ERR_TEMP.general };
  }
}

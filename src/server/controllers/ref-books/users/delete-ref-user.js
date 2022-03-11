import { db } from '../../../firebase/admin.js';
import { getAuth } from 'firebase-admin/auth';
import { logRef } from '../../../libs/logs/index.js';
import { objectFieldsToString } from '../../../../utils/objects/object-fields-to-string/index.js';
import ERR_TEMP from '../../../../templates/errors/template-errors.js';


export async function deleteRefUser(ctx, next) {
  const user = ctx.state.user;
  const logTemp = `[deleteRefUser] - [${user.email}]`;

  try {
    const email = ctx.request?.body?.email;
    const dbRef = db.collection(`users`);

    // const userId = ctx.request?.body?.userId;
    // Проверяем есть ли запрошенный адрес в базе, или например, кто-то успел удалить до того, как другой это начал
    // const userRecord = await getAuth().getUser(userId);
    // const email = userRecord.email;
    
    const userRes = await dbRef.doc(email).get();

    if (!userRes.exists) {
      logRef.error(`${logTemp} ${ERR_TEMP.auth.userNotFound}`);
      ctx.status = 400;
      ctx.body = { message: ERR_TEMP.auth.userNotFound };
      return;
    }

    // await getAuth().deleteUser(userId);
    // await dbRef.doc(email).delete();

    await dbRef.doc(userRes.data().email).update({ active: false });

    ctx.status = 200;
    ctx.body = { message: `Пользователь перемещён в список удалённых` };
    logRef.info(`${logTemp} ${userRes.data().email} success!`);
  }
  catch (err) {
    logRef.error(`${logTemp} ${objectFieldsToString(err)}`);
    ctx.status = 500;
    ctx.body = { general: ERR_TEMP.general };
  }
}

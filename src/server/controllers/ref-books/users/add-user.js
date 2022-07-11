import { db } from '../../../firebase/admin.js';
import { getAuth } from 'firebase-admin/auth';
// import { getAuth } from 'firebase/auth';
import { logRef } from '../../../libs/logs/index.js';
import { objectFieldsToString } from '../../../../utils/objects/object-fields-to-string/index.js';
import { getNewUser } from './get-new-user/get-new-user.js';
import sendMail from '../../../libs/emails/sendMail.js';
import createPassword from '../../../../utils/create-password/index.js';
import validUserDataNew from '../../../../utils/validators/user-data-new/user-data-new.js';
import ERR_TEMP from '../../../../templates/errors/template-errors.js';
// import APP from '../../../../config.js';


export async function addUser(ctx, next) {
  const user = ctx.state.user;
  const userData = ctx.request?.body;
  const email = userData?.email;
  const logTemp = `[addRefUser] - [${user.email}] - ${email}`;

  try {
    const { valid, errors } = validUserDataNew(userData);
    if (!valid) {
      logRef.error(`${logTemp} ${objectFieldsToString(errors)}`);
      ctx.status = 400; ctx.body = { errors }; return;
    }
    
    const newUser = getNewUser(userData, user.uid);

    const password = createPassword(9);

    const userRecord = await getAuth().createUser({ email, password });

    newUser.id = userRecord.uid;
    
    await db.collection(`users`).doc(email).set(newUser);

    await sendMail({
      to: email,
      subject: `Вас добавили на платформу - "${APP.SITE_TITLE.full}"`,
      locals: {
        name: userData.person.firstName,
        app_name: APP.SITE_TITLE.full,
        url_app: process.env.SITE_URL || APP.SITE_URL,
        email,
        password
      },
      template: 'info-registration',
    });
    
    ctx.status = 200;
    ctx.body = { newUser };
    logRef.info(`${logTemp} success!`);
  }
  catch (err) {
    console.log('err: ', err);
    if (err?.errorInfo?.code === `auth/email-already-exists`) {
      logRef.error(`${logTemp} ${objectFieldsToString(err.errorInfo)}`);
      ctx.status = 400;
      ctx.body = { errors: { email: ERR_TEMP.auth.emailExist }};
      return;
    }
    logRef.error(`${logTemp} ${objectFieldsToString(err)}`);
    ctx.status = 500;
    ctx.body = { general: ERR_TEMP.general };
  }
}

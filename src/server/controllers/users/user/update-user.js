import { db } from '../../../firebase/admin.js';
// Functions
import { logUser } from '../../../libs/logs/index.js';
import validate from '../../../../utils/validators/validate/index.js';
import { mergeWithScheme } from '../../../../utils/merge-with-scheme/index.js';
// Helpers
import { objectFieldsToString } from '../../../../utils/objects/index.js';
// Types & Consts
import ERR_TEMP from '../../../../templates/errors/template-errors.js';
import { Validator } from '../../../../types/types.js';
import { userScheme } from '../../../../templates/schemes/index.js';


export default async function updateUser(ctx, next) {
  const
    { user: { email } } = ctx.state,
    logTemp             = `[updateUser] - [${email}]`,
    userData            = ctx.request?.body?.userData;

  try {
    // TODO: checkPermisions

    const { valid, errors } = validate(Validator.USER_UPDATE, userData);
    if (!valid) {
      logRef.error(`${logTemp} ${objectFieldsToString(errors)}`);
      ctx.status = 400; ctx.body = { errors }; return;
    }

    // TODO: 
    // let userProfile = dataVerificationForUpdate(DataVerificationType.USER_PROFILE_UPDATE, reqUser, req.body);
    // if (notEmpty(userProfile)) await db.doc(`users/${req.body.companyId}/users/${req.body.userId}`).update(userProfile);
    
    const updated = mergeWithScheme(userData, userScheme);
    await db.collection(`users`).doc(email).update(updated);

    ctx.status = 200;
    ctx.body = { message: `Данные профиля, обновлены` };
    logUser.info(`${logTemp} success!`);
  }
  catch {
    logUser.error(`${logTemp} ${objectFieldsToString(err)}`);
    ctx.status = 500;
    ctx.body = { general: ERR_TEMP.general };
  }
}

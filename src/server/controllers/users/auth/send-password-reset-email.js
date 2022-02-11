import { admin } from '../../../firebase/admin.js';
// Validations
import validEmail from '../../../../utils/validators/email/email.js';
// Functions
import sendMail from '../../../libs/emails/sendMail.js';
import { logMail } from '../../../libs/logs/index.js';
// Helpers
import { objectFieldsToString } from '../../../../utils/objects/object-fields-to-string/object-fields-to-string.js';
// Consts
import ERR_TEMP from '../../../../templates/errors/template-errors.js';
import { cfg } from '../../../../../config.js';



export default async function sendPasswordResetEmail(ctx, next) {
  const email = ctx.request.body.email;

  try {
    const { valid, errors } = validEmail(email);
    if (!valid) {
      logMail.error(`[sendPasswordResetEmail] - ${email}: ${objectFieldsToString(errors)}`);
      ctx.status = 400;
      ctx.body = errors;
      return;
    }
    
    // Проверяем есть ли такой пользователь в базе, если нет, то выпадет ошибка
    await admin.auth().getUserByEmail(email);

    const actionCodeSettings = {
      url: process.env.SITE_URL_LOGIN || cfg.SITE_URL_LOGIN,
      handleCodeInApp: true,
    };

    const link = await admin.auth().generatePasswordResetLink(email, actionCodeSettings)
     
    if (link) await sendMail({
      to: email,
      subject: `Ссылка для восстановления доступа к - "${cfg.SITE_TITLE.full}"`,
      locals: {
        name: ``,
        app_name: cfg.SITE_TITLE.full,
        url_app: process.env.SITE_URL || cfg.SITE_URL,
        url_link: link
      },
      template: 'password-reset-link',
    });
    
    ctx.status = 200;
    ctx.body = { message: `Ссылка для восстановления пароля отправлена на почту: ${email}` };
    logMail.info(`[sendPasswordResetEmail] - ${email} successfully!`);
  }
  catch (err) {
    switch (err.code) {
      case `auth/user-not-found`:
        logMail.error(`[sendPasswordResetEmail] - ${email}: не зарегистирован`);
        ctx.status = 403;
        ctx.body = { general: `${email} не зарегистирован` };
        break;
      
      default:
        logMail.error(`[sendPasswordResetEmail] - ${email}: ${err}`);
        ctx.status = 500;
        ctx.body = { general: `Что-то пошло не так. Мы уже отправили разработчику отчёт об этом... Вскоре, всё починят......` };
    }
  }
}

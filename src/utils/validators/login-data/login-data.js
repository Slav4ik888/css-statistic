import { isEmpty, isEmail } from '../base/validators.js';
import TPL from '../../../templates/errors/template-errors.js';


// Проверяем данные для входа пользователя
export default function validLoginData(data) {
  let errors = {};

  // Проверка email
  if (isEmpty(data.email)) errors.email = TPL.auth.emailEmpty;
  if (!isEmail(data.email)) errors.email = TPL.auth.emailNotEmail;

  // Проверка пароля
  if (isEmpty(data.password)) errors.password = TPL.auth.passwordEmpty;
  if (!data.password || data.password.length < 6) errors.password = TPL.auth.passwordWrong;

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  }
};
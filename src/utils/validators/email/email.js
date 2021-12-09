import { isEmpty, isEmail } from '../base/validators.js';
import TPL from '../../../templates/errors/template-errors.js';


// Проверяем данные для входа пользователя
export default function validEmail(email) {
  let errors = {};

  // Проверка email
  if (isEmpty(email)) errors.email = TPL.auth.emailEmpty;
  if (!isEmail(email)) errors.email = TPL.auth.emailNotEmail;

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  }
};
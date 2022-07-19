import { isEmpty, isEmail } from '../base/validators.js';
import TPL from '../../../templates/errors/template-errors.js';


// Валидация при создании Пользователя
export default function validUserDataNew(data) {
  let errors = {};
  
  if (isEmpty(data?.email)) errors.email = TPL.auth.emailEmpty;
  if (!isEmail(data?.email)) errors.email = TPL.auth.emailNotEmail;

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
}

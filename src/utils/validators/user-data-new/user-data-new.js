import { isEmpty, isEmail } from '../base/validators.js';
import validUserData from '../user-data/user-data.js';
import TPL from '../../../templates/errors/template-errors.js';


// Валидация при создании Пользователя
export default function validUserDataNew(data) {
  let errors = {};
  
  if (isEmpty(data?.email)) errors.email = TPL.auth.emailEmpty;
  if (!isEmail(data?.email)) errors.email = TPL.auth.emailNotEmail;

  if (errors?.email) return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };

  return validUserData(data);
}
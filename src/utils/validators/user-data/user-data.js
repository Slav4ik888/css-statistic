import { isEmpty, isEmail, isNoValidMaxL30, isNoValidMaxL300 } from '../base/validators.js';
import { isNoOneOfSeveral } from '../is-one-of-several/index.js';
import { arrFromObj } from '../../objects/objects.js';
import { RoleType } from '../../../types/types.js';
import TPL from '../../../templates/errors/template-errors.js';


const roleType = arrFromObj(RoleType);


// Валидация при обновлении Пользователя
export default function validUserData(data) {
  let errors = {};

  // Проверка email
  if (data?.email) {
    if (isEmpty(data?.email)) errors.email = TPL.auth.emailEmpty;
    if (!isEmail(data?.email)) errors.email = TPL.auth.emailNotEmail;
  }

  // Проверка Person
  if (data?.person) {
    if (isEmpty(data?.person?.firstName)) errors.firstName = TPL.auth.firstNameIsNotBeEmpty;
    if (isNoValidMaxL30(data?.person?.firstName)) errors.firstName = TPL.auth.nameMoreMaxLength;
    if (isEmpty(data?.person?.secondName)) errors.secondName = TPL.auth.secondNameIsNotBeEmpty;
    if (isNoValidMaxL30(data?.person?.secondName)) errors.secondName = TPL.auth.nameMoreMaxLength;
    if (isNoValidMaxL30(data?.person?.middleName)) errors.middleName = TPL.auth.nameMoreMaxLength;
  }
  
  // Проверка description
  if (data?.description && isNoValidMaxL300(data?.description)) errors.description = TPL.auth.invalidDescription;

  if (data?.role) {
  // Проверка Типа пользователя
    if (isNoOneOfSeveral(data?.role?.type, roleType)) errors.roleType = TPL.auth.roleTypeIsNoOneOfSeveral;

    // Проверка Роли
    if (isEmpty(data?.role?.roleId)) errors.roleId = TPL.auth.roleIdIsNotBeEmpty;
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  }
}
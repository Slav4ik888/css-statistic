import * as u from '../../base/validators.js';
import { ERR_TEMP } from '../../../../templates/errors/get-error-message/error-templates.js';
import getErrorMessage from '../../../../templates/errors/get-error-message/index.js';
import getValidResult from '../../base/get-valid-result/index.js';
import { isNoOneOfSeveral } from '../../is-one-of-several/index.js';
import { RoleType } from '../../../../types/types.js';


/**
 * Проверяем данные при обновлении User
 */
export function validator(data) {
  let errors = {};
  const RoleTypesArr = Object.values(RoleType);

  // if (u.isEmpty(data?.id))      errors.id     = getErrorMessage(ERR_TEMP.DevMustNotBeEmpty, "id");
  if (u.noUndefined(data?.active) && u.isNoBool(data?.active)) errors.active = getErrorMessage(ERR_TEMP.MustBeBool, "active");
  if (u.isUndefined(data?.email) || u.isEmpty(data?.email)) errors.email = getErrorMessage(ERR_TEMP.DevMustNotBeEmpty, "email");

  if (u.noUndefined(data?.active) && u.isNoValidMaxL30(data?.person?.firstName))  errors.firstName  = getErrorMessage(ERR_TEMP.MustBeLess, "Имя", 30);
  if (u.noUndefined(data?.active) && u.isNoString(data?.person?.firstName))       errors.firstName  = getErrorMessage(ERR_TEMP.MustBeString, "Имя");

  if (u.noUndefined(data?.active) && u.isNoValidMaxL30(data?.person?.secondName)) errors.secondName = getErrorMessage(ERR_TEMP.MustBeLess, "Фамилия", 30);
  if (u.noUndefined(data?.active) && u.isNoString(data?.person?.secondName))      errors.secondName = getErrorMessage(ERR_TEMP.MustBeString, "Фамилия");
  
  if (u.noUndefined(data?.active) && u.isNoValidMaxL30(data?.person?.middleName)) errors.middleName = getErrorMessage(ERR_TEMP.MustBeLess, "Отчество", 30);
  if (u.noUndefined(data?.active) && u.isNoString(data?.person?.middleName))      errors.middleName = getErrorMessage(ERR_TEMP.MustBeString, "Отчество");
    
  if (u.noUndefined(data?.active) && isNoOneOfSeveral(data?.role?.type, RoleTypesArr)) errors.roleType = getErrorMessage(ERR_TEMP.MustBeOneOfSeveral, "Тип пользователя");
  if (u.noUndefined(data?.active) && u.isEmpty(data?.role?.roleId))                    errors.roleId   = getErrorMessage(ERR_TEMP.MustNotBeEmpty, "Тип роли");

  return getValidResult(errors);
}

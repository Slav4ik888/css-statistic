import * as u from '../../base/validators.js';
import { ERR_TEMP } from '../../../../templates/errors/get-error-message/error-templates.js';
import getErrorMessage from '../../../../templates/errors/get-error-message/index.js';
import getValidResult from '../../base/get-valid-result/index.js';


export function validator(data) {
  let errors = {};

  // Id
  if (u.isEmpty(data?.id))           errors.id   = getErrorMessage(ERR_TEMP.DevMustNotBeEmpty, "id");
  
  // Проверка role
  if (u.isEmpty(data?.role))         errors.role = getErrorMessage(ERR_TEMP.MustNotBeEmpty, "Роль")
  if (u.isNoValidMaxL30(data?.role)) errors.role = getErrorMessage(ERR_TEMP.MustBeLess, "Роль", 30);
  if (u.isNoString(data?.role))      errors.role = getErrorMessage(ERR_TEMP.MustBeString, "Роль");

  // Проверка description
  if (u.isNoValidMaxL100(data?.description))
    errors.description = getErrorMessage(ERR_TEMP.MustBeLess, "Описание роли", 100);
  
  if (data?.description && u.isNoString(data?.description))
    errors.description = getErrorMessage(ERR_TEMP.MustBeString, "Описание роли");
  
  // Проверка creds
  if (u.isNoObject(data?.creds)) errors.creds = getErrorMessage(ERR_TEMP.MustBeObject, "Полномочия");

  return getValidResult(errors);
}

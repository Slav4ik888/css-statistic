import * as u from '../../base/validators.js';
import { ERR_TEMP } from '../../../../templates/errors/get-error-message/error-templates.js';
import getErrorMessage from '../../../../templates/errors/get-error-message/index.js';
import getValidResult from '../../base/get-valid-result/index.js';
import { isNoOneOfSeveral } from '../../is-one-of-several/index.js';
import { arrFromObj } from '../../../objects/index.js';
import { RoleType } from '../../../../types/types.js';


// Проверяем данные при создании User
export function validator(data) {
  let errors = {};
  const RoleTypesArr = arrFromObj(RoleType);

  // Id
  if (u.isEmpty(data?.id))      errors.id     = getErrorMessage(ERR_TEMP.DevMustNotBeEmpty, "id");
  // Active
  if (u.isNoBool(data?.active)) errors.active = getErrorMessage(ERR_TEMP.MustBeBool, "active");
  
  // Email
  if (u.isEmpty(data?.email))   errors.email  = getErrorMessage(ERR_TEMP.MustNotBeEmpty, "Email");
  if (data?.email && u.isNotEmail(data?.email)) errors.email = getErrorMessage(ERR_TEMP.InvalidEmail);

  // Role.type
  if (isNoOneOfSeveral(data?.role?.type, RoleTypesArr)) errors.roleType = getErrorMessage(ERR_TEMP.MustBeOneOfSeveral, "Тип пользователя");
  // Role.roleId
  if (u.isEmpty(data?.role?.roleId))                    errors.roleId   = getErrorMessage(ERR_TEMP.MustNotBeEmpty, "Тип роли");

  return getValidResult(errors);
}

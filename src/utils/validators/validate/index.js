import { Validator } from "../../../types/types.js";
import getValidResult from "../base/get-valid-result/index.js";
import { userUpdate, roleUpdate, userAdd } from '../validators/index.js';


export default function validate(type, data) {
  switch (type) {
    case Validator.ROLE_UPDATE: return roleUpdate(data);
    case Validator.USER_ADD:    return userAdd(data);
    case Validator.USER_UPDATE: return userUpdate(data);

    default:  getValidResult({ general: `В функцию validate не передан тип валидатора или передан не верный` })
  }
}

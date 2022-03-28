import { Role } from "../../../../../types";
import { Mocks } from "./types";
import { getMockStrLength as getStr } from '../../../../strings';

const role = {
  id     : `roleId_123`,
  role   : `Director`,
  creds  : {}
};

const roleAllEmpty: Role = {} as Role;

const roleAndIdEmpty: Role = {
  id    : ``,
  role  : ``,
  creds : {}
};


const roleNoStringCredsNoObject: Role = {
  id    : `roleId_123`,
  role  : {},
  creds : ``
} as unknown as Role;

const roleAndDescriptionGreaterMaxlength: Role = {
  id          : `roleId_123`,
  description : getStr(101),
  role        : getStr(31),
  creds       : {}
} as unknown as Role;



export const mocks: Mocks = [
  [
    {
      description: `All data in Role right`,
      role
    }, {
      errors: {}, valid: true
    }
  ],
  [
    {
      description: `All data is empty`,
      role: roleAllEmpty
    }, {
      errors: {
        role  : "Не корректный тип данных. Поле \"Роль\" должно быть строкой.",
        creds : "Не корректный тип данных. Поле \"Полномочия\" должно быть объектом."
      }, valid: false
    }
  ],
  [
    {
      description: `role is empty`,
      role: roleAndIdEmpty
    }, {
      errors: {
        id   : "Поле \"id\" не должно быть пустым. Это ошибка разработчика.",
        role : "Поле \"Роль\" не должно быть пустым.",
      }, valid: false
    }
  ],
  [
    {
      description: `role NoString & creds noObject`,
      role: roleNoStringCredsNoObject
    }, {
      errors: {
        role  : "Не корректный тип данных. Поле \"Роль\" должно быть строкой.",
        creds : "Не корректный тип данных. Поле \"Полномочия\" должно быть объектом."
      }, valid: false
    }
  ],
  [
    {
      description: `role & description greater than maxlength`,
      role: roleAndDescriptionGreaterMaxlength,
    }, {
      errors: {
        role  : "Поле \"Роль\" должно быть меньше 30 символов.",
        description : "Поле \"Описание роли\" должно быть меньше 100 символов.",
      }, valid: false
    }
  ],
];

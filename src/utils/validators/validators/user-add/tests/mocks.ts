import { Person, RoleUser, RoleType } from "../../../../../types";
import { Mocks } from "./types";

// PERSON

const person = {
  firstName  : `Slava`,
  secondName : `Korzan`,
  middleName : ``
};

const personGreater = {
  firstName  : `012345678901234567890123456789_`,
  secondName : `012345678901234567890123456789_`,
  middleName : `012345678901234567890123456789_`
};

const personNoString = {
  firstName  : 123,
  secondName : false,
  middleName : {}
};

// EMAIL
const
  emailValid = `user@mail.ru`,
  emailInvalid = `@mail.ru`,
  emailEmpty = ``;


export const mocks: Mocks = [
  [
    {
      description: `All data in user right`,
      user: {
        id     : `userId_123`,
        active : true,
        email  : emailValid,
        person,
        role   : {
          roleId : `roleId123`,
          type   : RoleType.ADMIN
        }
      }
    }, {
      errors: {}, valid: true
    }
  ],
  [
    {
      description: `All data is empty`,
      user: {
        id     : ``,
        active : `` as unknown as boolean,
        email  : ``,
        person : {} as Person,
        role: {
          type   : `Роль` as unknown as RoleType,
          roleId : ``
        }
      }
    }, {
      errors: {
        id         : "Поле \"id\" не должно быть пустым. Это ошибка разработчика.",
        active     : "Не корректный тип данных. Поле \"active\" должно быть \"да\" или \"нет\".",
        email      : "Поле \"Email\" не должно быть пустым.",
        roleType   : "Поле \"Тип пользователя\" не является одним из допустимых значений.",
        roleId     : "Поле \"Тип роли\" не должно быть пустым."
      }, valid: false
    }
  ],
  [
    {
      description: `invalid email`,
      user: {
        id     : `userId_123`,
        active : true,
        email  : emailInvalid,
        person : personNoString as unknown as Person,
        role   : {
          roleId : `roleId123`,
          type   : RoleType.USER
        }
      }
    }, {
      errors: {
        email : "Не корректные email."
      }, valid: false
    }
  ]
];

import { CredSchemeItemType, CredType, RuleType } from "../../../types";

export default {
  creds: {
    id    : `creds`,
    type  : CredSchemeItemType.SECTION,
    label : `Полномочия`,
    
    permissions : {
      read   : [false, CredType.NO, `Видеть полномочия`],
      add    : [false, CredType.NO, ``],
      change : [false, CredType.NO, ``],
      del    : [false, CredType.NO, ``],
    },

    additionals : [
      {
        id    : `roles`,
        type  : CredSchemeItemType.FIRST,
        label : `Роли`,
        permissions: {
          read   : [true, CredType.NO, `Смотреть права доступа "Ролей"`],
          add    : [true, CredType.NO, `Создавать новые и назначать им права`],
          change : [true, CredType.NO, `Изменять существующие настройки прав "Ролей"`],
          del    : [true, CredType.NO, `Удалять "Роли"`]
        },
        unics: [
          {
            id    : `appoint`,
            type  : CredSchemeItemType.SECOND,
            rule  : [true, RuleType.ADDI, `Назначать "Роли" пользователям`],
          }
        ]
      },
      {
        id       : `type`,
        type     : CredSchemeItemType.FIRST,
        label    : `Тип пользователя`,
        unics: [
          {
            id   : `adminSet`,
            type : CredSchemeItemType.SECOND,
            rule : [true, RuleType.ADDI, `Назначать "Администратором"`]
          }
        ]
      }
    ],
  },

  user: {
    id    : `user`,
    type  : CredSchemeItemType.SECTION,
    label : `Пользователи`,

    permissions : {
      read   : [true, CredType.NO, `Видеть данные других пользователей`],
      add    : [true, CredType.NO, `Добавлять новых пользователей`],
      change : [true, CredType.NO, `Изменять базовые параметры`],
      del    : [true, CredType.NO, `Удалять пользователей`],
    },

    unics : [
      {
        id   : `change.sets`,
        type : CredSchemeItemType.FIRST,
        rule : [true, RuleType.ADDI, `Изменять настройки в "Персональных данных"`],
      }
    ],

    additionals: [
      {
        id    : `profile`,
        type  : CredSchemeItemType.FIRST,
        label : `Профиль`,
        
        permissions: {
          read   : [true,  CredType.NO, `Смотреть профиль`],
          add    : [false, CredType.NO, ``],
          change : [true,  CredType.NO, `Изменять профиль`],
          del    : [false, CredType.NO, ``]
        }
      }
    ]
  }
}
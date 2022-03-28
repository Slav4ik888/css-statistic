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
  },

  plan: {
    id    : `plan`,
    type  : CredSchemeItemType.SECTION,
    label : `План-погрузок`,

    permissions : {
      read   : [true,  CredType.NO, `Видеть "План-погрузок"`],
      add    : [false, CredType.NO, ``],
      change : [false, CredType.NO, `Изменять "План-погрузок"`],
      del    : [false, CredType.NO, ``],
    },

    additionals: [
      {
        id    : `week`,
        type  : CredSchemeItemType.FIRST,
        label : `Недели`,
        
        permissions: {
          read   : [false, CredType.NO, ``],
          add    : [true,  CredType.NO, `Создавать новые "Недели"`],
          change : [false, CredType.NO, ``],
          del    : [false, CredType.NO, ``]
        }
      }, {
        id    : `flight`,
        type  : CredSchemeItemType.FIRST,
        label : `Рейсы`,
        
        permissions: {
          read   : [true, CredType.NO, `Видеть имеющиеся "Рейсы"`],
          add    : [true, CredType.NO, `Создавать новые "Рейсы"`],
          change : [true, CredType.NO, `Вносить изменения в существующие "Рейсы"`],
          del    : [true, CredType.NO, `Удалять "Рейсы"`]
        }
      }, {
        id    : `cusOrder`,
        type  : CredSchemeItemType.FIRST,
        label : `Заявки заказчиков в "Рейсах"`,
        
        permissions: {
          read   : [true, CredType.NO, `Видеть заявки заказчиков в "Рейсах"`],
          add    : [true, CredType.NO, `Добавлять заявки заказчиков в "Рейсы"`],
          change : [true, CredType.NO, `Вносить изменения в существующие заявки заказчиков в "Рейсах"`],
          del    : [true, CredType.NO, `Удалять заявки заказчиков из "Рейсов"`]
        },

        unics: [
          {
            id   : `move`,
            type : CredSchemeItemType.SECOND,
            rule : [true, RuleType.ADDI, `Перемещать заявки заказчиков между "Рейсами"`]
          }, {
            id   : `add`,
            type : CredSchemeItemType.SECOND,
            rule : [true, RuleType.ADDI, `Добавлять заявки заказчиков в "Рейсы"`]
          }
        ]
      }, {
        id    : `carOrder`,
        type  : CredSchemeItemType.FIRST,
        label : `Заявки перевозчиков в "Рейсах"`,
        
        permissions: {
          read   : [true, CredType.NO, `Видеть заявки перевозчиков в "Рейсах"`],
          add    : [true, CredType.NO, `Добавлять заявки перевозчиков в "Рейсы"`],
          change : [true, CredType.NO, `Вносить изменения в существующие заявки перевозчиков в "Рейсах"`],
          del    : [true, CredType.NO, `Удалять заявки перевозчиков из "Рейсов"`]
        },

        unics : [
          {
            id   : `setFromFlight`,
            type : CredSchemeItemType.SECOND,
            rule : [true, RuleType.ADDI, `На доставку назначать машину из "Рейса"`],
          }, {
            id   : `setFromRef`,
            type : CredSchemeItemType.SECOND,
            rule : [true, RuleType.ADDI, `На доставку назначать машину из "Справочника Логис"`],
          }, {
            id   : `setFromCarrier`,
            type : CredSchemeItemType.SECOND,
            rule : [true, RuleType.ADDI, `На доставку назначать привлечённую ТС`],
          }
        ]
      }
    ],
  },

  cusOrd: {
    id    : `cusOrder`,
    type  : CredSchemeItemType.SECTION,
    label : `Заявки с клиентами`,

    permissions : {
      read   : [true, CredType.OWN, `Видеть "Заявки с клиентами"`],
      add    : [true, CredType.NO,  `Создавать "Заявки с клиентами"`],
      change : [true, CredType.NO,  `Изменять существующие "Заявки с клиентами"`],
      del    : [true, CredType.NO,  `Удалять "Заявки с клиентами"`],
    }
  },

  carOrd: {
    id    : `carOrder`,
    type  : CredSchemeItemType.SECTION,
    label : `Заявки с перевозчиками`,

    permissions : {
      read   : [true, CredType.OWN, `Видеть "Заявки с перевозчиками"`],
      add    : [true, CredType.NO,  `Создавать "Заявки с перевозчиками"`],
      change : [true, CredType.NO,  `Изменять существующие "Заявки с перевозчиками"`],
      del    : [true, CredType.NO,  `Удалять "Заявки с перевозчиками"`],
    },

    additionals: [
      {
        id    : `dispatcher`,
        type  : CredSchemeItemType.FIRST,
        label : `Куратор`,
        
        permissions : {
          change: [true,  CredType.NO,  `Назначать Куратора по заявке с перевозчиком`],
        },

        unics: [
          {
            id   : `canAccept`,
            type : CredSchemeItemType.SECOND,
            rule : [true, RuleType.ADDI, `Быть назначенным Куратором`],
          }, {
            id   : `addComment`,
            type : CredSchemeItemType.SECOND,
            rule : [true, RuleType.ADDI, `Оставлять комментарии в Заявке с перевозчиком`],
          }
        ]
      },
    ]
  },

  logist: {
    id    : `logist`,
    type  : CredSchemeItemType.SECTION,
    label: `Логисты`,

    permissions : {
      read   : [true, CredType.OWN, `Видеть порученные Логистам - "Задания на поиск транспорта"`],
      add    : [true, CredType.NO,  `Назначать Логиста на поиск транспорта`],
      change : [true, CredType.NO,  `Менять назначенного Логиста`],
      del    : [true, CredType.NO,  `Удалять "Задания Логиста"`],
    },

    unics : [
      {
        id   : `canAccept`,
        type : CredSchemeItemType.FIRST,
        rule : [true, RuleType.ADDI, `Принимать задания на поиск транспорта`],
      }
    ],
  }
}
import { RefbookType, RefbookId } from '../../../types/index.ts';


export const RefbooksList = [
  {
    type: RefbookType.ROLES,
    label: `Роли`,
    id: RefbookId.ROLES,
    toolLabel: `Настройка ролей и прав доступа сотрудников.`,
    cardTitle: `ролей`,
    confirmTitle: `эту роль`,
    iconName: `roles`
  },
  {
    type: RefbookType.USERS,
    label: `Сотрудники`,
    id: RefbookId.USERS,
    toolLabel: `Сотрудники имеющие доступ в приложение.`,
    cardTitle: `сотрудника`,
    confirmTitle: `этого сотрудника`,
    iconName: `users`
  },
  // { // Разделитель
  //   type: ``,
  //   label: ``,
  //   id: ``,
  //   toolLabel: ``
  // }
];

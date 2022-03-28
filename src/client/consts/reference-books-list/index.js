import { RefBookType, RefBookId } from '../../../types/index.ts';


export const ReferenceBooksList = [
  {
    type: RefBookType.ROLES,
    label: `Роли`,
    id: RefBookId.ROLES,
    toolLabel: `Настройка ролей и прав доступа сотрудников.`,
    cardTitle: `ролей`,
    confirmTitle: `эту роль`,
    iconName: `roles`
  },
  {
    type: RefBookType.USERS,
    label: `Сотрудники`,
    id: RefBookId.USERS,
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

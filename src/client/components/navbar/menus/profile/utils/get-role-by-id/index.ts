import { User, RolesArr } from '../../../../../../../types';


export default function getRoleById(user: User) {
  return RolesArr
    .find(r => r.id === user?.role?.roleId) || { label: `Роль не указана` }
}
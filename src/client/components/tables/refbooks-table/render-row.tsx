import * as React from 'react';
// Components
import RoleRow from '../../ref-books/ref-books/roles/row-content';
import UserRow from '../../ref-books/ref-books/users/row-content';
// Types
import { Role, TableType, User } from '../../../../types';


type Props = {
  type  : TableType,
  count : number,
  item  : any
};

const RenderRow: React.FC<Props> = ({ type, count, item }) => {

  const _item = React.useMemo(() => item, [item]);


  switch (type) {
    case TableType.ROLES: return <RoleRow count={count} item={_item as Role} />
    case TableType.USERS: return <UserRow count={count} item={_item as User} />
    
    default: return null;
  }
};

export default RenderRow;

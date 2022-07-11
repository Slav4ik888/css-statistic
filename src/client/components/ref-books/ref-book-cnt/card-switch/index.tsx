import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getNewId } from '../../../../redux/selectors/ref-books';
import { State } from '../../../../redux/redux-types';
// Components
import CardRole from '../../ref-books/roles/card';
import CardUser from '../../ref-books/users/card';
// Functions
// Types
import { RefbookId, CardType } from '../../../../../types';
import { UseGroup } from '../../../../utils/hooks/types';



type Props = {
  refBookId  : RefbookId;     // Id Справочника
  newId?     : string;        // Id нового элемента, при создании
  checkedId? : string;        // Id выбранного элемента для редактирования
  group      : UseGroup<any>; // Чтобы была возможность закрыть карточку при удалении
};


// Выводит выбранный элемент в Справочнике для редактирования
const CardSwitch: React.FC<Props> = ({ refBookId, group, newId, checkedId }) => {

  const selectedId = React.useMemo(() => checkedId ? checkedId : newId,[newId]);
  console.log('selectedId: ', selectedId);

  switch (refBookId) {
    case RefbookId.ROLES:
      return <CardRole roleId={selectedId} group={group} />
    
    case RefbookId.USERS:
      return <CardUser type={CardType.EDIT} userId={selectedId} group={group} />
    
    default: return (<></>);
  }
};


const mapStateToProps = (state: State) => ({
  newId: getNewId(state)
});

export default connect(mapStateToProps)(CardSwitch);

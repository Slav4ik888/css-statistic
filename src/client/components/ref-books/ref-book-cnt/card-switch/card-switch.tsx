import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getNewId } from '../../../../redux/selectors/ref-books/ref-books';
import { State } from '../../../../redux/redux-types';
// Components
import CardRole from '../../ref-books/roles/card';
import CardUser from '../../ref-books/users/card';
import CardDriver from '../../ref-books/drivers/card';
import CardTransport from '../../ref-books/transports/card';
import CardCompany from '../../ref-books/companies/card';
import CardAddress from '../../ref-books/addresses/card';
import CardContact from '../../ref-books/contacts/card';
import CardCargos from '../../ref-books/cargos/card';
// Functions
// Types
import { RefBookId, UserCardType } from '../../../../../types';
import { UseGroup } from '../../../../utils/hooks/types';



type Props = {
  refBookId  : RefBookId; // Id Справочника
  newId?     : string; // Id нового элемента, при создании
  checkedId? : string; // Id выбранного элемента для редактирования
  group      : UseGroup<any>; // Чтобы была возможность закрыть карточку при удалении
};


// Выводит выбранный элемент в Справочнике для редактирования
const CardSwitch: React.FC<Props> = ({ refBookId, group, newId, checkedId }) => {

  const selectedId = React.useMemo(() => checkedId ? checkedId : newId,[newId]);
  console.log('selectedId: ', selectedId);

  switch (refBookId) {
    case RefBookId.ROLES:
      return <CardRole roleId={selectedId} group={group} />
    
    case RefBookId.USERS:
      return <CardUser type={UserCardType.EDIT} userId={selectedId} group={group} />
    
    case RefBookId.DRIVERS:
      return <CardDriver driverId={selectedId} group={group} />
    
    case RefBookId.TRANSPORTS:
      return <CardTransport transportId={selectedId} group={group} />
    
    case RefBookId.COMPANIES:
    case RefBookId.CARRIERS:
    case RefBookId.PAYER:
      return <CardCompany companyId={selectedId} group={group} />
    
    case RefBookId.ADDRESSES:
    case RefBookId.ADDRESSES_IN_COMPANY:
      return <CardAddress addressId={selectedId} group={group} />
    
    case RefBookId.CONTACTS:
    case RefBookId.CONTACTS_IN_COMPANY:
      return <CardContact contactId={selectedId} group={group} />
    
    case RefBookId.CARGOS:
      return <CardCargos cargoId={selectedId} group={group} />
    
    default: return (<></>);
  }
};

const mapStateToProps = (state: State, props: Props) => ({
  newId: getNewId(state, props)
});

export default connect(mapStateToProps)(CardSwitch);

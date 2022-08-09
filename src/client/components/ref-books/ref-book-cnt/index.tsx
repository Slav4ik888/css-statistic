import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { loadRefbooksByIds, addNewElement } from '../../../redux/actions/ref-books';
import { getRefbookById } from '../../../redux/selectors/ref-books';
import { State } from '../../../redux/redux-types';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import RefSearch from '../ref-search';
import RefBookList from './ref-book-list';
import AddBtn from './add-btn';
import DialogNewUserCard from './dialog-new-user';
import DialogRefbookCard from './dialog-refbook-card';
// Functions
import { getSearchType } from '../utils/get-search-type';
import { useGroup, useValue } from '../../../utils/hooks';
// Types
import { RefbookId, Strings, User } from '../../../../types';



type Props = {
  refbookId          : RefbookId; // Id Справочника
  storeRefbook?      : Array<any>;
  loadRefbooksByIds? : (refbookIds: Strings) => void;
  addNewElement?     : (refbookId: string) => void;
};


const RefbookCnt: React.FC<Props> = ({ refbookId, storeRefbook, loadRefbooksByIds, addNewElement }) => {
  const
    group    = useGroup(),       // Открытие карточки для редактирования
    selected = useValue(``),     // Выбранная карточка
    Add      = useGroup(),       // Открытие карточки нового элемента
    NewU     = useGroup<User>(); // Открытие dialog AddNewUser при добавлении нового пользователя

  
  React.useEffect(() => {
    if (storeRefbook !== null) return console.log(`Справочник уже загружен`);

    const refBooksIds = [`users`, `roles`];
    console.log(`Загружаем справочники: `, refBooksIds);
    loadRefbooksByIds(refBooksIds);
  }, [refbookId]);
  

  const handlerAdd = () => {
    if (refbookId === RefbookId.USERS) NewU.setOpen();
    else {
      addNewElement(refbookId); // Создаём новый элемент в Справочнике
      Add.setOpen();
    }
  };


  const handleSearch = (checkedId?: string, add?: boolean) => {
    if (checkedId) {
      // console.log('checkedId: ', checkedId);
      selected.setValue(checkedId);
      group.setOpen();
    }
    else if (add) handlerAdd();
  };

  
  return (
    <Box sx={{ display: `flex`, flexDirection: `column`, pt: 2 }}>
      <RefSearch
        type      = {getSearchType(refbookId)}
        items     = {storeRefbook}
        refbookId = {refbookId}
        onSelect  = {handleSearch}
      />

      <RefBookList
        group     = {group}
        refbookId = {refbookId}
        selected  = {selected}
      />

      <AddBtn onAdd={handlerAdd} />

      <DialogRefbookCard group={Add} refbookId={refbookId} />
      <DialogNewUserCard group={NewU} />
    </Box>
  );
};

const mapStateToProps = (state: State, props: Props) => ({
  storeRefbook: getRefbookById(state, props)
});

const mapActionsToProps = {
  loadRefbooksByIds, addNewElement
};

export default connect(mapStateToProps, mapActionsToProps)(RefbookCnt);

import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { loadRefBooks, addNewElement } from '../../../redux/actions/ref-books/ref-books';
import { getRefBookById } from '../../../redux/selectors/ref-books/ref-books';
import { State } from '../../../redux/redux-types';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import RefSearch from '../ref-search/ref-search';
import RefBookList from './ref-book-list/ref-book-list';
import AddBtn from './add-btn/add-btn';
import DialogInfo from '../../dialogs/dialog-info/dialog-info';
import CardUser from '../ref-books/users/card';
// Functions
import { getSearchType } from '../utils/get-search-type';
import { useGroup, useValue } from '../../../utils/hooks';
// Types
import { RefBookId, User, UserCardType } from '../../../../types';



type Props = {
  refBookId      : RefBookId; // Id Справочника
  storeRefBook?  : Array<any>;
  loadRefBooks?  : (refBookIds: Array<string>) => void;
  addNewElement? : (refBookId: string) => void;
}


const RefBookCnt: React.FC<Props> = ({ refBookId, storeRefBook, loadRefBooks, addNewElement }) => {
  
  React.useEffect(() => {
    if (storeRefBook !== null) return console.log(`Справочник уже загружен`);

    let refBooksIds = [];

    if (refBookId === `companies` || refBookId === `contacts` || refBookId === `addresses`) refBooksIds = [`companies`, `contacts`, `addresses`];
    else if (refBookId === `users` || refBookId === `roles`) refBooksIds = [`users`, `roles`]
    else if (refBookId === `transports` || refBookId === `drivers`) refBooksIds = [`transports`, `drivers`]
    else refBooksIds.push(refBookId);

    console.log(`Загружаем справочники: `, refBooksIds);
    // refBooksIds.forEach((id) => loadRefBook(id));
    loadRefBooks(refBooksIds);

  }, [refBookId]);
  

  // Открытие карточки для редактирования
  const group = useGroup();
  // Выбранная карточка
  const selected = useValue(``);

  // Открытие карточки нового элемента
  const groupAdd = useGroup();
  // Открытие dialog AddNewUser при добавлении нового пользователя
  const hookNewUser = useGroup<User>();


  const handleSearch = (checkedId?: string, add?: boolean) => {
    if (checkedId) {
      // console.log('checkedId: ', checkedId);
      selected.setValue(checkedId);
      group.setOpen();
    }
    else if (add) {
      if (refBookId === `users`) {
        hookNewUser.setOpen();
      }
      else {
        addNewElement(refBookId); // Создаём новый Элемент в Справочнике
        groupAdd.setOpen();
      }
    }
  };

  
  return (
    <Box sx={{ display: `flex`, flexDirection: `column`, pt: 2 }}>
      <RefSearch
        type={getSearchType(refBookId)}
        items={storeRefBook}
        onSelect={handleSearch}
      />

      <RefBookList
        group={group}
        refBookId={refBookId}
        selected={selected}
      />

      <AddBtn group={groupAdd} refBookId={refBookId} />

      
      <DialogInfo
        hookOpen={hookNewUser}
        onClose={hookNewUser.setClose}
        title={`Добавление нового пользователя`}
        children={<CardUser type={UserCardType.ADD} group={hookNewUser} />}
      />
      
    </Box>
  );
};

const mapStateToProps = (state: State, props: Props) => ({
  storeRefBook: getRefBookById(state, props),
});

const mapActionsToProps = {
  loadRefBooks, addNewElement
};

export default connect(mapStateToProps, mapActionsToProps)(RefBookCnt);

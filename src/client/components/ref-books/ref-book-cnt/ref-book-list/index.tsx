import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getLoadingRef, getRefBookById } from '../../../../redux/selectors/ref-books';
import { State } from '../../../../redux/redux-types';
// MUI Stuff
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
// Components
import CircularProgress from '../../../buttons/circular-progress';
import DialogInfo from '../../../dialogs/dialog-info';
import ListTableSwitch from '../list-table-switch';
import CardSwitch from '../card-switch/card-switch';
// Functions
import { getCardTitleById } from '../../utils/get-card-title-by-id';
// Types
import { UseGroup, UseValue } from '../../../../utils/hooks/types';
import { RefBookId } from '../../../../../types';



type Props = {
  loadingRef?   : boolean;
  group         : UseGroup<any>;
  selected      : UseValue;
  storeRefBook? : Array<any>;
  refBookId     : RefBookId;  // Id Справочника
};


// Выводит выбранный Справочник в виде списка
const RefBookList: React.FC<Props> = ({ loadingRef, group, selected, storeRefBook, refBookId }) => {
  console.log('storeRefBook: ', storeRefBook);
  if (loadingRef) return <CircularProgress loading={loadingRef} />;
  if (!storeRefBook?.length) return <Box sx={{ minHeight: `200px` }}>В "Справочнике" нет данных...</Box>;


  // Закрытие карточки
  const handleClose = () => {
    selected.clearValue();
    group.setClose();
  }


  // Выбранный Id элемента из Справочника
  const handleCheck = (checkedId: string) => {
    console.log('checkedId: ', checkedId);
    selected.setValue(checkedId);
    group.setOpen();
  };


  return (
    <>
      <ListTableSwitch refBookId={refBookId} onCheck={handleCheck} />
      
      <DialogInfo
        hookOpen={group}
        onClose={handleClose}
        title={getCardTitleById(refBookId)}
        children={<CardSwitch
          refBookId={refBookId}
          checkedId={selected.value}
          group={group}
        />}
      />
    </>
  );
};


const mapStateToProps = (state: State, props: Props) => ({
  loadingRef: getLoadingRef(state),
  storeRefBook: getRefBookById(state, props),
});

export default connect(mapStateToProps)(RefBookList);
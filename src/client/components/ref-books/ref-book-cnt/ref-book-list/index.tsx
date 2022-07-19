import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getLoading, getRefbookById } from '../../../../redux/selectors/ref-books';
import { State } from '../../../../redux/redux-types';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import CircularProgress from '../../../buttons/circular-progress';
import DialogInfo from '../../../dialogs/dialog-info';
import ListTableSwitch from './list-table-switch';
import CardSwitch from '../../card-switch';
// Functions
import { getCardTitle } from '../../utils/get-card-title';
// Types
import { UseGroup, UseValue } from '../../../../utils/hooks';
import { CardType, RefbookId } from '../../../../../types';



type Props = {
  loading?   : boolean;
  group         : UseGroup<any>;
  selected      : UseValue<any>;
  storeRefBook? : Array<any>;
  refbookId     : RefbookId;  // Id Справочника
};

/**
 * Выводит выбранный Справочник в виде списка
 */
const RefBookList: React.FC<Props> = ({ loading, group, selected, storeRefBook, refbookId }) => {
  if (!storeRefBook?.length) return <Box sx={{ minHeight: `200px` }}>В "Справочнике" нет данных...</Box>;


  const handleClose = () => {
    selected.clearValue();
    group.setClose();
  };

  const handleCheck = (checkedId: RefbookId) => {
    console.log('checkedId: ', checkedId);
    selected.setValue(checkedId);
    group.setOpen();
  };


  return (
    <>
      <CircularProgress loading={loading} center block />
      <ListTableSwitch refbookId={refbookId} onCheck={handleCheck} />
      
      <DialogInfo
        title    = {getCardTitle(CardType.EDIT, refbookId)}
        hookOpen = {group}
        onClose  = {handleClose}
      >
        <CardSwitch
          refbookId = {refbookId}
          checkedId = {selected.value}
          group     = {group}
        />
      </DialogInfo>
    </>
  );
};


const mapStateToProps = (state: State, props: Props) => ({
  loading      : getLoading(state),
  storeRefBook : getRefbookById(state, props)
});

export default connect(mapStateToProps)(RefBookList);

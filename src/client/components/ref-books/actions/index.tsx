import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { deleteElement } from '../../../redux/actions/ref-books';
import { getLoadingUpd } from '../../../redux/selectors/ref-books';
import { State } from '../../../redux/redux-types';
// MUI Stuff
import { Button, Divider, Box } from '@mui/material';
// Components
import DialogConfirm from '../../dialogs/dialog-confirm';
import CancelSubmitBtn from '../../buttons/cancel-submit-btn';
// Functions
import { UseBase, useValue } from '../../../utils/hooks';
import { getConfirmTitleById } from '../utils/get-confirm-title-by-id';
// Types & Styles
import { ConfirmType, RefbookId } from '../../../../types';
import { FlexDirection } from '../../../utils/styles';



const useStyles = () => ({
  root: {
    display: `flex`,
    flexDirection: FlexDirection.COLUMN,
    alignItems: `flex-end`,
    mt: 4,
    py: 2
  },
  divider: { width: `100%`, mb: 4 },
  content: {
    display: `flex`,
    justifyContent: `space-between`,
    width: `100%`
  },
  delete: {
    color: `red`
  }
});


type Props = {
  loadingUpd?      : boolean;
  disabledDelete?  : boolean; // Если не нужно показывать кнопку удаления
  refbookId?       : RefbookId;  // Id Справочника
  id?              : string;  // Созданный или имеющийся Id of element Справочника
  email?           : string;  // Для User
  hookOpen         : UseBase; // Чтобы была возможность закрыть карточку при удалении
  deleteElement?   : (refbookId: string, id: string, email?: string) => void;
  // onDel?           : () => void; // Удаление для Перевозчика
  onSubmit         : (e: any, exit?: boolean) => void;
};


// Actions in CardFooter
const Actions: React.FC<Props> = ({ loadingUpd, disabledDelete, refbookId, id, email, hookOpen, deleteElement, onSubmit }) => {

  const
    sx       = useStyles(),
    confirm  = useValue(),
    disabled = !hookOpen.changes;

  const handleDel = () => {
    confirm.setClose();
    hookOpen.setClose();
    console.log(`Удаляем...`, id);
    if (refbookId) deleteElement(refbookId, id, email)
    // else onDel();
  };

  const confirmTitle = getConfirmTitleById(refbookId);

  
  return (
    <Box sx={sx.root}>
      <Divider sx={sx.divider} />

      <Box sx={sx.content}>
        <Button sx={sx.delete}
          variant  = "outlined"
          disabled = {disabledDelete}
          onClick  = {() => confirm.setOpen()}
        >
          Удалить
        </Button>
        
        <CancelSubmitBtn onSubmit={onSubmit} loading={loadingUpd} disabled={disabled} />
      </Box>

      <DialogConfirm
        open     = {confirm.open}
        typeOk   = {ConfirmType.DEL}
        title    = {confirmTitle}
        onOk     = {handleDel}
        onCancel = {confirm.setClose}
      />
    </Box>
  );
};


const mapStateToProps = (state: State) => ({
  loadingUpd: getLoadingUpd(state)
});

export default connect(mapStateToProps, { deleteElement })(Actions);

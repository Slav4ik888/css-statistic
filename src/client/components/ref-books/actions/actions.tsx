import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { deleteElement } from '../../../redux/actions/ref-books/ref-books';
import { getLoadingUpd } from '../../../redux/selectors/ref-books/ref-books';
import { State } from '../../../redux/redux-types';
// MUI Stuff
import { Button, Divider, Box } from '@mui/material';
// Components
import DialogConfirm from '../../dialogs/dialog-confirm';
import CancelSubmitBtn from '../../buttons/cancel-submit-btn/cancel-submit-btn';
// Functions
import { useOpen } from '../../../utils/hooks/hooks';
import { getConfirmTitleById } from '../utils/get-confirm-title-by-id';
import { getConfirmTitleByCarrier } from '../utils/get-confirm-title-by-carrier';
// Types
import { UseOpen } from '../../../utils/hooks/types';
import { CompanyAddType, ConfirmType } from '../../../../types';
// Styles
import { FlexDirection } from '../../../utils/styles';
import { useTheme } from '@emotion/react';



const useStyles = (theme) => ({
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
  carrierCardType? : CompanyAddType; // Для карточки Перевозчика
  disabledDelete?  : boolean; // Если не нужно показывать кнопку удаления
  refBookId?       : string;  // Id Справочника
  id?              : string;  // Созданный или имеющийся Id of element Справочника
  email?           : string;  // Для User
  hookOpen         : UseOpen; // Чтобы была возможность закрыть карточку при удалении
  deleteElement?   : (refBookId: string, id: string, email?: string) => void;
  onDel?           : () => void; // Удаление для Перевозчика
  onSubmit         : () => void;
}


// Actions in CardFooter
const Actions: React.FC<Props> = ({ loadingUpd, disabledDelete, refBookId, id, email,
  carrierCardType, hookOpen, deleteElement, onDel, onSubmit
}) => {
  const sx = useStyles(useTheme());
  const confirm = useOpen(false);

  const disabled =  !hookOpen.isChange;

  const handleDel = () => {
    confirm.setClose();
    hookOpen.setClose();
    console.log(`Удаляем...`, id);
    if (refBookId) deleteElement(refBookId, id, email)
    else onDel();
  };

  const confirmTitle = refBookId
    ? getConfirmTitleById(refBookId) : carrierCardType
      ? getConfirmTitleByCarrier(carrierCardType) : `Удалить эту заявку`;

  
  return (
    <Box sx={sx.root}>
      <Divider sx={sx.divider} />
      <Box sx={sx.content}>
        <Button sx={sx.delete} variant="outlined"
          disabled={disabledDelete}
          onClick={confirm.setOpen}
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
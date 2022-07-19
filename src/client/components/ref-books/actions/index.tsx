import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { deleteElement } from '../../../redux/actions/ref-books';
import { getLoading } from '../../../redux/selectors/ref-books';
import { State } from '../../../redux/redux-types';
// MUI Stuff
import { Button, Divider, Box } from '@mui/material';
// Components
import DialogConfirm from '../../dialogs/dialog-confirm';
import CancelSubmitBtn from '../../buttons/cancel-submit-btn';
// Functions
import { UseBase, useValue } from '../../../utils/hooks';
// Types & Styles
import { CardType, ConfirmType, RefbookId } from '../../../../types';
import { FlexDirection } from '../../../utils/styles';
import { getCardTitle } from '../utils';



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
  loading?        : boolean;
  disabledDelete? : boolean;   // Если не нужно показывать кнопку удаления
  refbookId?      : RefbookId;
  id?             : string;    // Созданный или имеющийся Id of element Справочника
  email?          : string;    // Для User
  hookOpen        : UseBase;   // Чтобы была возможность закрыть карточку при удалении
  submitText?     : string;
  deleteElement?  : (refbookId: string, id: string, email?: string) => void;
  onSubmit        : (e: any, exit?: boolean) => void;
};

/**
 * Actions in CardFooter
 */
const Actions: React.FC<Props> = ({ loading, disabledDelete, refbookId, id, email, hookOpen, submitText, deleteElement, onSubmit }) => {
  const
    sx           = useStyles(),
    confirm      = useValue(),
    disabled     = !hookOpen.changes,
    confirmTitle = getCardTitle(CardType.DEL, refbookId);

  
  const handleDel = () => {
    confirm.setClose();
    hookOpen.setClose();
    if (refbookId) deleteElement(refbookId, id, email)
  };

  
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
        
        <CancelSubmitBtn
          onSubmit   = {onSubmit}
          loading    = {loading}
          disabled   = {disabled}
          submitText = {submitText}
        />
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
  loading: getLoading(state)
});

export default connect(mapStateToProps, { deleteElement })(Actions);

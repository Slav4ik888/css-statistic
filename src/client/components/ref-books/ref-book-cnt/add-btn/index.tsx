import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { addNewElement } from '../../../../redux/actions/ref-books/ref-books';
// MUI Stuff
import { Button, Box } from '@mui/material';
// Icons
import Add from '@mui/icons-material/Add';
// Components
import CardSwitch from '../card-switch';
import CardUser from '../../ref-books/users/card';
import DialogInfo from '../../../dialogs/dialog-info';
// Functions
import { getCardTitleById } from '../../utils/get-card-title-by-id';
import { useGroup } from '../../../../utils/hooks/use-group';
// Types & Styles
import { RefBookId, User, CardType } from '../../../../../types';
import { UseGroup } from '../../../../utils/hooks/types';
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  root: {
    display         : `flex`,
    justifyContent  : `flex-end`
  },
  button: {
    backgroundColor : theme.palette.primary.light
  }
});


type Props = {
  refBookId      : RefBookId;
  group          : UseGroup<any>;
  addNewElement? : (id: string) => void;
};


// Добавление в Справочник нового элемента
const AddBtn: React.FC<Props> = ({ refBookId, group, addNewElement }) => {
  const sx = useStyles(useTheme());

  const groupNewUser = useGroup<User>();

  const handleAdd = () => {
    if (refBookId === `users`) {
      groupNewUser.setOpen();
    }
    else {
      group.setOpen();
      addNewElement(refBookId); // Создаём новый элемент в Справочнике
    }
  };


  return (
    <Box sx={sx.root} >
      <Button variant="contained" sx={sx.button} onClick={handleAdd} startIcon={<Add />}>
        добавить
      </Button>

      <DialogInfo
        title    = {getCardTitleById(refBookId)}
        hookOpen = {group}
        onClose  = {group.setClose}
      >
        <CardSwitch group={group} refBookId={refBookId} />
      </DialogInfo>

      <DialogInfo
        title    = {`Добавление нового пользователя`}
        hookOpen = {groupNewUser}
        onClose  = {groupNewUser.setClose}
      >
        <CardUser type={CardType.ADD} group={groupNewUser} />
      </DialogInfo>
    </Box>
  );
};

export default connect(undefined, { addNewElement })(AddBtn);

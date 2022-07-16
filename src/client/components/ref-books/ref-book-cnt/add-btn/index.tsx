import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { addNewElement } from '../../../../redux/actions/ref-books/ref-books';
// MUI Stuff
import { Button, Box } from '@mui/material';
// Icons
import Add from '@mui/icons-material/Add';
// Components
import CardSwitch from '../../card-switch';
import CardUser from '../../ref-books/users/card';
import DialogInfo from '../../../dialogs/dialog-info';
// Functions
import { getCardTitleById } from '../../utils/get-card-title-by-id';
import { useGroup, UseGroup } from '../../../../utils/hooks';
// Types & Styles
import { RefbookId, User, CardType } from '../../../../../types';
import { useTheme } from '@emotion/react';
import { Themes } from '../../../../utils/styles';



const useStyles = (theme: Themes) => ({
  root: {
    display         : `flex`,
    justifyContent  : `flex-end`
  },
  button: {
    backgroundColor : theme.palette.primary.light
  }
});


type Props = {
  refbookId      : RefbookId;
  group          : UseGroup<any>;
  addNewElement? : (id: string) => void;
};


// Добавление в Справочник нового элемента
const AddBtn: React.FC<Props> = ({ refbookId, group, addNewElement }) => {
  const
    sx = useStyles(useTheme() as Themes),
    groupNewUser = useGroup<User>();

  
  const handleAdd = () => {
    if (refbookId === RefbookId.USERS) groupNewUser.setOpen();
    else {
      group.setOpen();
      addNewElement(refbookId); // Создаём новый элемент в Справочнике
    }
  };


  return (
    <Box sx={sx.root} >
      <Button variant="contained" sx={sx.button} onClick={handleAdd} startIcon={<Add />}>
        добавить
      </Button>

      <DialogInfo
        title    = {getCardTitleById(refbookId)}
        hookOpen = {group}
        onClose  = {group.setClose}
        children = {<CardSwitch group={group} refbookId={refbookId} />}
      />
        
      <DialogInfo
        title    = {`Добавление нового пользователя`}
        hookOpen = {groupNewUser}
        onClose  = {groupNewUser.setClose}
        children = {<CardUser type={CardType.ADD} group={groupNewUser} />}
      />
    </Box>
  );
};

export default connect(undefined, { addNewElement })(AddBtn);

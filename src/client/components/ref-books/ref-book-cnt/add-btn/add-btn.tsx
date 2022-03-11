import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { addNewElement } from '../../../../redux/actions/ref-books/ref-books';
// MUI Stuff
import { Button, Box } from '@mui/material';
// Icons
import Add from '@mui/icons-material/Add';
// Components
import CardSwitch from '../card-switch/card-switch';
import CardUser from '../../ref-books/users/card';
import DialogInfo from '../../../dialogs/dialog-info/dialog-info';
// Functions
import { getCardTitleById } from '../../utils/get-card-title-by-id';
import { useGroup } from '../../../../utils/hooks/use-group';
// Types
import { RefBookId, User, UserCardType } from '../../../../../types';
import { UseGroup } from '../../../../utils/hooks/types';
// Styles
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  root: {
    display: `flex`,
    justifyContent: `flex-end`
  },
  button: {
    backgroundColor: theme.palette.primary.light
  }
});


type Props = {
  refBookId      : RefBookId;     // Id Справочника
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
        hookOpen={group}
        onClose={group.setClose}
        title={getCardTitleById(refBookId)}
        children={<CardSwitch
          group={group}
          refBookId={refBookId}
        />}
      />

      <DialogInfo
        hookOpen={groupNewUser}
        onClose={groupNewUser.setClose}
        title={`Добавление нового пользователя`}
        children={<CardUser type={UserCardType.ADD} group={groupNewUser} />}
      />
    </Box>
  );
};


export default connect(undefined, { addNewElement })(AddBtn);
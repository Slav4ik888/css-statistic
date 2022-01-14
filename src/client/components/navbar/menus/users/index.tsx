import * as React from 'react';
// Redax Stuff
import { connect } from 'react-redux';
import { loadUsers } from '../../../../redux/actions/data';
import { State } from '../../../../redux/redux-types';
// MUI Stuff
import Menu from '@mui/material/Menu';
// Components
import CircularProgress from '../../../buttons/circular-progress/circular-progress';
import MenuItem from './menu-item';
import DialogInfo from '../../../dialogs/dialog-info';
import UsersCnt from '../../../users';
// Functions
import { useObject, useOpen } from '../../../../utils/hooks/hooks';
// Types, Styles
import { Users } from '../../../../../types';
import { useTheme } from '@emotion/react';
import { getLoadingData, getUsers } from '../../../../redux/selectors/data';


const useStyles = (theme) => ({
  // root: {
  //   display: `flex`,
  // },
  paper: {
    elevation: 0,
    sx: {
      width: 280,
      overflow: 'visible',
      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
      mt: 4,
      '& .MuiAvatar-root': {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
      },
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: 'background.paper',
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 0,
      },
    },
  },
});



type Props = {
  loading?   : boolean;
  open       : boolean;
  anchorEl   : Element;
  menuId     : string;
  users?     : Users;
  loadUsers? : () => void;
  onClose    : () => void;
};


const UsersMenu: React.FC<Props> = ({ loading, open, anchorEl, menuId, users, loadUsers, onClose }) => {
  if (!open) return null;
  if (loading) return <CircularProgress loading={loading} />;

  const sx = useStyles(useTheme());

  React.useEffect(() => {
    if (users === null) loadUsers();
  }, []);

  const hookOpen = useOpen(false);

  // const refBook = useObject<RefBookId>(null);

  // React.MouseEvent<HTMLElement>
  const handleOpen = (e: any) => {
    const target = e.target.closest(`li`);
    // refBook.setObject(target.id);
    hookOpen.setOpen();
  }

  const handleClose = () => {
    // refBook.setObject(null);
    hookOpen.setClose();
  }
  
  return (
    <>
      <Menu
        id              = {menuId}
        open            = {open}
        onClose         = {onClose}
        anchorEl        = {anchorEl}
        anchorOrigin    = {{ vertical: 'top', horizontal: 'right' }}
        transformOrigin = {{ vertical: 'top', horizontal: 'right' }}
        PaperProps      = {sx.paper}
        keepMounted
      >
        {
          users?.map((user, i) => <MenuItem
            key    = {user.id}
            user   = {user}
            onOpen = {handleOpen}
          />)
        }
      </Menu>

      <DialogInfo hookOpen={hookOpen} title="Пользователи" onClose={handleClose}>
        <UsersCnt />
      </DialogInfo>
    </>
  )
};

const mapStateToProps = (state: State) => ({
  loading: getLoadingData(state),
  users: getUsers(state)
});

export default connect(mapStateToProps, { loadUsers })(UsersMenu);

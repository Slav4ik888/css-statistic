import * as React from 'react';
// Redax Stuff
import { connect } from 'react-redux';
import { getLoadingRef, getUsers } from '../../../../redux/selectors/ref-books';
import { State } from '../../../../redux/redux-types';
// MUI Stuff
import Menu from '@mui/material/Menu';
// Components
import CircularProgress from '../../../buttons/circular-progress';
import MenuItem from './menu-item';
import DialogInfo from '../../../dialogs/dialog-info';
import UsersCnt from '../../../users/users-cnt';
import AddUserBtn from './add-user-btn';
// Functions
import { useGroup } from '../../../../utils/hooks';
// Types, Styles
import { User, Users } from '../../../../../types';



const useStyles = () => ({
  menu: {
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
  onClose    : () => void;
};


const UsersMenu: React.FC<Props> = ({ loading, open, anchorEl, menuId, users, onClose }) => {

  const
    sx = useStyles(),
    G  = useGroup<User>();

  // const refBook = useObject<RefBookId>(null);

  // React.MouseEvent<HTMLElement>
  const handleOpen = (e: any) => {
    const
      target = e.target.closest(`li`),
      id     = target.id,
      user   = users?.find(u => u.id === id);
      
    G.setGroup(user);
    G.setOpen();
  };

  if (!open) return null;
  
  return (
    <>
      <Menu
        id              = {menuId}
        open            = {open}
        onClose         = {onClose}
        anchorEl        = {anchorEl}
        anchorOrigin    = {{ vertical: 'top', horizontal: 'right' }}
        transformOrigin = {{ vertical: 'top', horizontal: 'right' }}
        PaperProps      = {sx.menu}
        keepMounted
      >
        {
          users?.map((user, i) => <MenuItem
            key    = {user.id}
            user   = {user}
            onOpen = {handleOpen}
          />)
        }

        <AddUserBtn />
      </Menu>

      <DialogInfo hookOpen={G} title="Пользователь">
        <UsersCnt group={G} />
      </DialogInfo>

      <CircularProgress loading={loading} block />
    </>
  )
};

const mapStateToProps = (state: State) => ({
  loading : getLoadingRef(state),
  users   : getUsers(state)
});

export default connect(mapStateToProps)(UsersMenu);

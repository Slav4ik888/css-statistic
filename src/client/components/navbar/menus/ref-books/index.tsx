import * as React from 'react';
// MUI Stuff
import Menu from '@mui/material/Menu';
// Components
import DialogInfo from '../../../dialogs/dialog-info';
import RefBookCnt from '../../../ref-books/ref-book-cnt';
import RefBookItem from './ref-book-item';
// Functions
import { getLabelById } from '../../../ref-books/utils/get-label-by-id';
import { useOpen } from '../../../../utils/hooks/hooks';
// Consts
import { ReferenceBooksList } from '../../../../consts/reference-books-list';
// Types
import { RefBookId } from '../../../../../types';
// Styles
import { useTheme } from '@emotion/react';
import { useGroup } from '../../../../utils/hooks';


const useStyles = (theme) => ({
  root: {
    display: `flex`,
    width: 280
  },
  paper: {
    elevation: 0,
    sx: {
      overflow: 'visible',
      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
      mt: 1.5,
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
  open     : boolean;
  anchorEl : Element;
  menuId   : string;
  // role?: string; // Role;
  onClose  : () => void;
};


// Меню со Справочниками для Navbar
const RefBookMenu: React.FC<Props> = ({ open, onClose, anchorEl, menuId }) => {
  const sx = useStyles(useTheme());
  const hookOpen = useOpen(false);

  const refBook = useGroup<RefBookId>();

  // React.MouseEvent<HTMLElement>
  const handleOpen = (e: any) => {
    const target = e.target.closest(`li`);
    refBook.setGroup(target.id);
    hookOpen.setOpen();
  }

  const handleClose = () => {
    refBook.setGroup(null);
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
          ReferenceBooksList
            .map((item, i) => <RefBookItem key={item.id + i} item={item} onOpen={handleOpen} />)
        }
      </Menu>

      <DialogInfo
        hookOpen = {hookOpen}
        onClose  = {handleClose}
        title    = {getLabelById(refBook.group)}
        children = {<RefBookCnt refBookId={refBook.group} />}
      />
    </>
  )
};


export default RefBookMenu;

import * as React from 'react';
// MUI Stuff
import Menu from '@mui/material/Menu';
// Components
import DialogInfo from '../../../dialogs/dialog-info';
import RefbookCnt from '../../../ref-books/ref-book-cnt';
import RefbookItem from './refbook-item';
// Functions
import { getRefbookLabel } from '../../../ref-books/utils/get-refbook-label';
import { useValue } from '../../../../utils/hooks';
// Types & Consts & Styles
import { RefbooksList } from '../../../../consts/reference-books-list';
import { RefbookId } from '../../../../../types';



const useStyles = () => ({
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
  onClose  : () => void;
};

/** Меню со Справочниками для Navbar */
const RefBookMenu: React.FC<Props> = ({ open, anchorEl, menuId, onClose }) => {
  const
    sx       = useStyles(),
    hookOpen = useValue(),
    refbook  = useValue<RefbookId>();

  
  const handleOpen = (e: any) => {
    const target = e.target.closest(`li`);
    refbook.setValue(target.id);
    hookOpen.setOpen();
  };

  const handleClose = () => {
    refbook.setValue(null);
    hookOpen.setClose();
  };

  
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
          RefbooksList
            .map((item, i) => <RefbookItem key={item.id + i} item={item} onOpen={handleOpen} />)
        }
      </Menu>

      <DialogInfo
        hookOpen = {hookOpen}
        onClose  = {handleClose}
        title    = {getRefbookLabel(refbook.value)}
        children = {<RefbookCnt refbookId={refbook.value} />}
      />
    </>
  )
};

export default RefBookMenu;

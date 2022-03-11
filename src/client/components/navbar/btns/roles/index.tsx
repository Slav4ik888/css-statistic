import * as React from 'react';
// Components
import NavBtn from '../nav-btn';
import UsersMenu from '../../menus/users';


type Props = {
};


const RolesMenuBtn: React.FC<Props> = () => {
  
  const [anchorPro, setAnchorPro] = React.useState(null);
  const isOpen = !!anchorPro;
  const menuId = `roles-menu-id`;
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorPro(event.currentTarget);
  const handleMenuClose = () => setAnchorPro(null);


  return (
    <>
      <NavBtn
        label     = {`Полномочия`}
        toolLabel = {`Настройка и управление "Ролями" и их полномочиями`}
        onClick   = {handleMenuOpen}
      />

      <UsersMenu
        open      = {isOpen}
        onClose   = {handleMenuClose}
        menuId    = {menuId}
        anchorEl  = {anchorPro}
      />
    </>
  );
};

export default RolesMenuBtn;

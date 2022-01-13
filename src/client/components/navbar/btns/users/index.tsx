import * as React from 'react';
// Components
import NavBtn from '../nav-btn';
import UsersMenu from '../../menus/users';


type Props = {
};


const UsersMenuBtn: React.FC<Props> = () => {
  
  const [anchorPro, setAnchorPro] = React.useState(null);
  const isOpen = !!anchorPro;
  const menuId = `users-menu-id`;
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorPro(event.currentTarget);
  const handleMenuClose = () => setAnchorPro(null);


  return (
    <>
      <NavBtn
        label     = {`Пользователи`}
        toolLabel = {`Приглашение и управление "Пользователями"`}
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

export default UsersMenuBtn;

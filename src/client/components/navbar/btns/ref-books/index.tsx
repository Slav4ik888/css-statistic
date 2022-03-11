import * as React from 'react';
// Components
import NavBtn from '../nav-btn';
import ReferenceMenu from '../../menus/ref-books';


// Кнопка для входа в Справочники
const RefBooksMenuBtn: React.FC = () => {
  
  const [anchorPro, setAnchorPro] = React.useState(null);
  const isOpen = Boolean(anchorPro);
  const menuId = `reference-menu`;
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorPro(event.currentTarget);
  const handleMenuClose = () => setAnchorPro(null);

  return (
    <>
      <NavBtn
        label     = {`Справочники`}
        toolLabel = {`Перейти в "Справочники"`}
        onClick   = {handleMenuOpen}
      />

      <ReferenceMenu
        open      = {isOpen}
        onClose   = {handleMenuClose}
        menuId    = {menuId}
        anchorEl  = {anchorPro}
      />
    </>
  );
};


export default RefBooksMenuBtn;

import * as React from 'react';
// Components
import NavBtn from '../nav-btn';
import ReferenceMenu from '../../menus/ref-books';


/** Кнопка для входа в Справочники */
const RefBooksMenuBtn: React.FC = () => {
  const
    [anchorPro, setAnchorPro] = React.useState(null),
    isOpen = Boolean(anchorPro),
    handleMenuOpen  = (event: React.MouseEvent<HTMLElement>) => setAnchorPro(event.currentTarget),
    handleMenuClose = () => setAnchorPro(null);

  return (
    <>
      <NavBtn
        label     = 'Справочники'
        toolLabel = 'Перейти в "Справочники"'
        onClick   = {handleMenuOpen}
      />

      <ReferenceMenu
        open      = {isOpen}
        onClose   = {handleMenuClose}
        menuId    = 'reference-menu'
        anchorEl  = {anchorPro}
      />
    </>
  );
};


export default RefBooksMenuBtn;

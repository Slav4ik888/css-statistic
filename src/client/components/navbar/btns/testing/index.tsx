import * as React from 'react';
// Components
import NavBtn from '../nav-btn';
import TestingMenu from '../../menus/testing';


type Props = {
  history: { location: { pathname: string }, push: (path: string) => void };
};


// Кнопка для входа в Testing
const TestingMenuBtn: React.FC<Props> = ({ history}) => {
  
  const [anchorPro, setAnchorPro] = React.useState(null);
  const isOpen = Boolean(anchorPro);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorPro(event.currentTarget);
  const handleMenuClose = () => setAnchorPro(null);


  return (
    <>
      <NavBtn
        label     = {`Тестирование`}
        toolLabel = {`Перейти в "Область данных для тестирования"`}
        onClick   = {handleMenuOpen}
      />

      <TestingMenu
        open      = {isOpen}
        onClose   = {handleMenuClose}
        menuId    = {`reference-menu`}
        anchorEl  = {anchorPro}
        history   = {history}
      />
    </>
  );
};


export default TestingMenuBtn;
import * as React from 'react';
// Components
import ProfilesMenuBtn from '../../btns/profile';


type Props = {
  authenticated: boolean;
};


// Кнопки Navbar меню после авторизации
const MenuBtns: React.FC<Props> = ({ authenticated }) => {
  if (!authenticated) return null;

  return (
    <>
      <ProfilesMenuBtn />
    </>
  );
};

export default MenuBtns;
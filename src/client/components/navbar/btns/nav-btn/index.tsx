import * as React from 'react';
// MUI Stuff
import { Button, Tooltip } from '@mui/material';
// Styles
import { useTheme } from '@emotion/react';
import { Themes } from '../../../../utils/styles';



const useStyles = (theme: Themes) => ({
  root: {
    display: `flex`
  },
  button: {
    mx    : 1,
    py    : 1,
    px    : 3,
    color : theme.navbar.color,
    '&.MuiButton-root:hover': {
      backgroundColor: theme.navbar.hoverBg
    } 
  }
});


type Props = {
  icon?      : JSX.Element;  // Иконка
  label      : string;       // Название кнопки
  onClick    : (e: React.MouseEvent<HTMLElement>) => void;
  toolLabel  : string; // Tooltip
  toolPlace? : 'top' | 'bottom' | 'bottom-end' | 'bottom-start' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start';
};

/**
 * Шаблон для кнопок Navbar после авторизации
 */
const NavBtn: React.FC<Props> = ({ icon, label, toolLabel, toolPlace, onClick }) => {
  const sx = useStyles(useTheme() as Themes);
  
  return (
      
    <Tooltip title={toolLabel} placement={toolPlace ? toolPlace : 'bottom'} arrow enterDelay={1000} enterNextDelay={1000}>
      <Button
        variant   = 'text'
        startIcon = {icon}
        sx        = {sx.button}
        onClick   = {onClick}
      >
        {label}
      </Button>
    </Tooltip>
  );
};

export default NavBtn;

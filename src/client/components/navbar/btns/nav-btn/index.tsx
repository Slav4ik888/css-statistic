import * as React from 'react';
// Routes
import { Link, Redirect } from 'react-router-dom';
import { RouteType } from '../../../../utils/routes/routes';
// MUI Stuff
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
// Styles
import { useTheme } from '@emotion/react';



const useStyles = (theme) => ({
  root: {
    display: `flex`
  },
  button: {
    mr: 1, ml: 1,
    pt: 1, pr: 3, pb: 1, pl: 3,
    color: theme.navbar.color,
    '&.MuiButton-root:hover': {
      backgroundColor: theme.navbar.hoverBg
    } 
  }
});


type Props = {
  icon?: JSX.Element;  // Иконка
  label: string;       // Название кнопки
  onClick    : (e: React.MouseEvent<HTMLElement>) => void;
  toolLabel  : string; // Tooltip
  toolPlace? : "top" | "bottom" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start";
};


// Шаблон для кнопок Navbar после авторизации
const NavBtn: React.FC<Props> = ({ icon, label, onClick, toolLabel, toolPlace }) => {
  const sx = useStyles(useTheme());
  
  return (
      
    <Tooltip
      title={toolLabel}
      placement={toolPlace ? toolPlace : "bottom"}
      arrow
      enterDelay={1000}
      enterNextDelay={1000}
    >

      <Button
        sx={sx.button}
        variant="text"
        startIcon={icon}
        onClick={onClick}
      >
        {
          label
        }
      </Button>
    </Tooltip>
  );
};


export default NavBtn;
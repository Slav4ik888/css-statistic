import * as React from 'react';
// Routes
import { Link } from 'react-router-dom';
import { RouteType } from '../../../../../utils/routes/routes';
// MUI Stuff
import { IconButton, Tooltip } from '@mui/material';
// Icons
import AccountCircle from '@mui/icons-material/AccountCircle';
// Types
import { ScreenFormats } from '../../../../../../types';



type Props = {
  screenFormat: ScreenFormats;
};

  
// Кнопка Navbar для входа в авторизацию
const AnyAuthBtn: React.FC<Props> = ({ screenFormat }) => {
  if (screenFormat?.isMobile) return null;


  return (
    <Tooltip title={`Войти`} placement={"bottom"} arrow enterDelay={500} enterNextDelay={1000} >
      <Link to={RouteType.LOGIN}>
        <IconButton>
          <AccountCircle />
        </IconButton>
      </Link>
    </Tooltip>
  );
};

export default AnyAuthBtn;
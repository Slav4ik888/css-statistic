import * as React from 'react';
// Routes
import { Link } from 'react-router-dom';
import { RouteType } from '../../../utils/routes/routes';
// MUI
import Box from '@mui/material/Box';
// Images
import * as LogoUrlBC from '../../../images/fav-da.png';
import * as LogoUrlDA from '../../../images/favicon.png';
// Types & Consts
import { LogoBtnType, ScreenFormats } from '../../../../types/index';
// Styles
import { FlexDirection } from '../../../utils/styles';
import { useTheme } from '@emotion/react';


// Обёртка для LogoBtnType.FOOTER_DESKTOP
const WrapLogo = (type: LogoBtnType, component: JSX.Element) => {
  if (type === LogoBtnType.FOOTER_DESKTOP) {
    return <Box sx={{
      display: `flex`,
      justifyContent: `flex-start`,
      width: `33%`
    }}>{component}</Box>;
  }
  else return component;
};


const useStyles = (theme) => ({
  logo: {
    width: `32px`,
    marginTop: `8px`,
    marginLeft: `4px`
  },
  main_page: {
    width: 200,
    mb: `30px`
  },
  footer_mobile: {
    display: `flex`,
    flexDirection: FlexDirection.COLUMN,
    alignItems: `baseline`,
    justifyContent: `space-between`,
    // height: 100,
    pt: { xs: 0, sm: 3 }
  },
  footer_desktop: {
    display: `flex`,
    flexDirection: FlexDirection.COLUMN,
    alignItems: `baseline`,
    width: 130,
    // height: 100,
    pt: 3,
  },
});
  

type Props = {
  type: LogoBtnType;
  screenFormats?: ScreenFormats;
};


// Кнопка логотипа
const LogoBtn: React.FC<Props> = ({ type, screenFormats }) => {
  
  if (type === LogoBtnType.FOOTER_DESKTOP &&
    screenFormats?.isTablet || screenFormats?.isMobile) return null;
  
  const sx = useStyles(useTheme());
  
  let unicLogo = {};

  switch (type) {
    case LogoBtnType.NAV_UP:
    case LogoBtnType.NAV_DOWN:
      break;
    
    case LogoBtnType.FOOTER_MOBILE:
      unicLogo = {...sx.footer_mobile };
      break;
    
    case LogoBtnType.FOOTER_DESKTOP:
      unicLogo = {...sx.footer_desktop };
      break;
    
    case LogoBtnType.MAIN_PAGE:
      unicLogo = {...sx.main_page };
  };

  const LogoImg = (<Link to={RouteType.ROOT}>
    <img src={LogoUrlBC} alt="Логотип BC" style={{ ...sx.logo, ...unicLogo }} />
    <img src={LogoUrlDA} alt="Логотип DA" style={{ ...sx.logo, ...unicLogo }} />
  </Link>);

  const LogoComponent = WrapLogo(type, LogoImg);

  return (
    <>
      {
        LogoComponent
      }
    </>
  );
};


export default LogoBtn;
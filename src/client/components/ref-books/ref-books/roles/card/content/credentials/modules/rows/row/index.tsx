import * as React from 'react';
// MUI Stuff
import { Box } from '@mui/material';
// Types
import { CredSchemeItemType } from '../../../../../../../../../../../types';
// Styles
import { fcc, fc_ } from '../../../../../../../../../../utils/styles';
import { useTheme } from '@emotion/react';


const useStyles = (theme, type: CredSchemeItemType) => {
  const section = type === CredSchemeItemType.SECTION;
  const first   = type === CredSchemeItemType.FIRST;
  const second  = type === CredSchemeItemType.SECOND;
  

  return {
    root: {
      ...fcc,
      width: `100%`,
      height: 32,
      borderBottom: `1px solid #d1d9dd`
    },
    label: {
      ...fc_,
      width: `50%`,
      fontSize:   () => section ? `1.1rem`  : 
                        first   ? `0.9rem`  : 
                                  `0.8rem`,  // Second
      fontWeight: () => section ? `bold`    : `normal`,
      fontStyle:  () => second  ? `italic`  : `normal`,
      color:      () => first   ? `#607c8a` : `inherit`
    },
    item: {
      ...fcc,
      width: `10%`,
      fontSize: `0.6rem`
    },
    unic: {
      // width: `8%`,
      // borderLeft: `1px solid #d1d9dd`,
      // borderRight: `1px solid #d1d9dd`
    }
  }
};
  

type Props = {
  type    : CredSchemeItemType;
  label   : string;
  unic?   : JSX.Element;
  read?   : JSX.Element;
  add?    : JSX.Element;
  change? : JSX.Element;
  del?    : JSX.Element;
};


const CredRowPermissions: React.FC<Props> = ({ type, label, unic, read, add, change, del }) => {
  const sx = useStyles(useTheme(), type);

  return (
    <Box sx={sx.root}>
      <Box sx={sx.label}>{label}</Box>

      <Box sx={{ ...sx.item, ...sx.unic }}>{unic}</Box>
      
      <Box sx={sx.item}>{read}</Box>
      <Box sx={sx.item}>{add }</Box>
      <Box sx={sx.item}>{change}</Box>
      <Box sx={sx.item}>{del }</Box>
    </Box>
  );
};


export default CredRowPermissions;

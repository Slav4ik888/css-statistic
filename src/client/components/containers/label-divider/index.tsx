import * as React from 'react';
// MUI Stuff
import { Typography, Box } from '@mui/material';
// Components
import GridWrap from '../grid-wrap';
// Styles
import { FlexDirection, cl, fc_sb } from '../../../utils/styles';
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  root: {
    display: `flex`,
    flexDirection: FlexDirection.COLUMN,
    width: `100%`,
    pt: 2,
    pb: 2.5
  },
  row: {
    ...fc_sb
  },
  h1: {
    mb: 0.5,
    color: `#607d8b`,
    fontSize: `1.4rem`
  }
});


type Props = {
  label          : string;
  labelMaxWidth? : string | number;
  classname?     : object;
};


const LabelDivider: React.FC<Props> = ({ label, labelMaxWidth, classname }) => {
  const sx = useStyles(useTheme());
  const styleLabel = `h1`;

  return (
    <GridWrap grid={{ sm: 12, sx: { ...sx.root, ...classname } }}>
      <Box sx={sx.row}>
        <Typography
          sx={{
            ...cl({ width: labelMaxWidth }, labelMaxWidth),
            ...sx[styleLabel]
          }}
        >
          {label}
        </Typography>
      </Box>
    </GridWrap>
  );
};

export default LabelDivider;

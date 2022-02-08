import * as React from 'react';
// MUI Stuff
import { Grid, Paper } from '@mui/material';
// Components
import LabelDivider from '../label-divider';
// Styles
import { useTheme } from '@emotion/react';
import { FlexDirection } from '../../../utils/styles';



const useStyles = (theme) => ({
  root: {
    display: `flex`,
    flexDirection: FlexDirection.COLUMN,
    backgroundColor: theme.cardBlock.background,
    width: `100%`,
    mt: 3, mb: 5,
    p: 2, pb: 4
  }
});



type Props = {
  label: string;
  children: JSX.Element | JSX.Element[];
};


// Блок для карточки элемента
const CardBlock: React.FC<Props> = ({ label, children }) => {
  const sx = useStyles(useTheme());

  return (
    <Paper sx={sx.root}>
      <Grid container spacing={2}>
        <LabelDivider label={label} />
        {
          children
        }
      </Grid>
    </Paper>
  );
};

export default CardBlock;

import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { State } from '../../../../../redux/redux-types';
import { getSelectedDates } from '../../../../../redux/selectors/stats';
// MUI Stuff
import Box from '@mui/material/Box';
// Types
import { SelectedDates } from '../../../../../../types';
// Styles
import { useTheme } from '@emotion/react';
import { FlexDirection } from '../../../../../utils/styles';


const useStyles = (theme) => ({
  root: {
    display: `flex`,
    flexDirection: FlexDirection.COLUMN
  },
  title: {
    my: 2, pl: 2,
    color: theme.paper.title.color,
    fontSize: theme.paper.title.fontSize
  },
  dates: {
    mb: 2, pl: 2,
    color: theme.paper.dates.color,
    fontSize: theme.paper.dates.fontSize
  }
});


type Props = {
  dates? : SelectedDates; 
};


const Title: React.FC<Props> = ({ dates }) => {
  const sx = useStyles(useTheme());

  return (
    <Box sx={sx.root}>
      <Box sx={sx.title}>
        Статистика из файлов техподдержки Да-Телеком и Badcom
      </Box>
      <Box sx={sx.dates}>с {dates.from} по {dates.to}</Box>
    </Box>
  );
};


const mapStateToProps = (state: State) => ({
  dates   : getSelectedDates(state)
});

export default connect(mapStateToProps)(Title);
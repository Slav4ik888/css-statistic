import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { State } from '../../../redux/redux-types';
// MUI Stuff
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
// Components
// Functions
// Types
// Styles
import { themes, cl, FlexDirection, Position } from '../../../utils/styles';
import { useTheme } from '@emotion/react';


const useStyles = (theme) => ({
  root: {
    display: `flex`
  },
});


type Props = {
  
};


const Component: React.FC<Props> = ({  }) => {
  const sx = useStyles(useTheme());


  return (
    <Box sx={sx.root}>
      
    </Box>
  );
};


const mapStateToProps = (state: State) => ({
});

const mapActionsToProps = {
};

export default connect(mapStateToProps, mapActionsToProps)(Component);
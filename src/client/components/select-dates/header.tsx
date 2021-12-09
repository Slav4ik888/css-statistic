import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { State } from '../../redux/redux-types';
// MUI Stuff
import { Box, Divider } from '@mui/material';
// Images
import * as ImgStat from '../../images/stats_icon.png';
// Components
// Functions
import { fcc, Position } from '../../utils/styles';


const styleImg = {
  position: Position.ABS,
  top: `0px`,
  left: `30px`,
  width: `32px`,
  marginRight: `8px`
};


type Props = {
};


const SelectDatesHeader: React.FC<Props> = ({}) => {
  
  return (
    <>
      <Box sx={{ ...fcc, position: `relative`, my: 2, fontSize: `1.4rem` }}>
        <img src={ImgStat} alt="Статистика" style={{ ...styleImg }} />
        Выберите даты
      </Box>
      <Divider />
    </>
  );
};


const mapStateToProps = (state: State) => ({
});


export default connect(mapStateToProps)(SelectDatesHeader);
import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import DelBtn from '../../../../buttons/del-btn';
// Types
import { ConfirmElemType, Table } from '../../../../../../types';
import { cl, fcc, TextAlign } from '../../../../../utils/styles';



const useStyles = () => ({
  root: {
    ...fcc
  },
  row: {
    display: `flex`,
    alignItems: `center`,
    textAlign: TextAlign.LEFT,
    cursor: `pointer`,
    transition: `background 0.3s ease-out`,
    '&:hover': {
      backgroundColor: `#eee`
    },
    borderBottom: `1px solid #e0e0e0`,
    minHeight: `45px`,
    maxHeight: `75px`,
    width: `100%`
  }
});



type Props = {
  item     : any;
  data     : Table;
  border   : { length: number, idx: number }; // Чтобы расчитать, когда не выводить последнюю границу
  children : JSX.Element;
  onCheck  : (id: string) => void;
  onDel?   : (id: string) => void;
};


const Row: React.FC<Props> = ({ item, border, data, children, onCheck, onDel }) => {
  const
    sx          = useStyles(),
    handleCheck = () => onCheck(item.id),
    handleDel   = () => onDel  (item.id);
  
  
  return (
    <Box sx={sx.root}>
      <Box
        sx={{
          ...sx.row,
          ...data.row.styles,
          ...cl({ border: `none` }, border.length <= (border.idx + 1))
        }}
        onClick={handleCheck}
      >
        {
          children
        }
      </Box>
      {
        onDel && <DelBtn type={ConfirmElemType.REF_BOOKS} onDel={handleDel} />
      }
    </Box>
  );
};

export default Row;

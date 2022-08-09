import * as React from 'react';
// MUI Stuff
import Paper from '@mui/material/Paper';
// Components
import Header from './header';
import Body from './body';
// Types & Styles
import { Table, TableType } from '../../../../types';
import { TextAlign } from '../../../utils/styles';



const useStyles = () => ({
  root: {
    minWidth  : 650,
    textAlign : TextAlign.CENTER,
    mb        : 4
  }
});


type Props = {
  type    : TableType;
  items   : Array<any>;
  data    : Table;
  onCheck : (id: string) => void;
  onDel?  : (id: string) => void;
};

const Table: React.FC<Props> = ({ type, items, data, onCheck, onDel }) => {
  if (!data || !type) return null;
  
  const sx = useStyles();


  return (
    <Paper sx={{ ...sx.root, ...data.table.styles }}>
      <Header data={data} />
      <Body
        type    = {type}
        items   = {items}
        data    = {data}
        onCheck = {onCheck}
        onDel   = {onDel}
      />
    </Paper>
  );
};

export default Table;

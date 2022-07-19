import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import Row from './row';
import RenderRow from './render-row';
// Types
import { Table, TableType } from '../../../../../types';
// Styles
import { FlexDirection } from '../../../../utils/styles';
import { useTheme } from '@emotion/react';



const useStyles = (theme) => ({
  root: {
    display       : `flex`,
    flexDirection : FlexDirection.COLUMN,
    minHeight     : 200
  }
});


type Props = {
  type    : TableType;
  items   : Array<any>;
  data    : Table;
  onCheck : (id: string) => void;
  onDel?  : (id: string) => void;
};


const Body: React.FC<Props> = ({ type, items, data, onCheck, onDel }) => {
  if (!items?.length) return null;
  const sx = useStyles(useTheme());

  return (
    <Box sx={{ ...sx.root, ...data.body.styles }}>
      {
        items.map((item, i) => <Row key={item.id}
          item     = {item}
          data     = {data}
          border   = {{ length: items.length, idx: i }}
          onCheck  = {onCheck}
          onDel    = {onDel}
        >
          <RenderRow type={type} count={i + 1} item={item} />
        </Row>)
      }
    </Box>
  );
};

export default Body;

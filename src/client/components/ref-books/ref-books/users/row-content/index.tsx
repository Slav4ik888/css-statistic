import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getLoading, getRoleByItem } from '../../../../../redux/selectors/ref-books';
import { State } from '../../../../../redux/redux-types';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import Cell from '../../../../tables/refbooks-table/cell';
// Functions
import { getFio } from '../../../utils/get-fio';
// Types
import { User } from '../../../../../../types';
// Styles
import { cl, TextAlign } from '../../../../../utils/styles';
import { useTheme } from '@emotion/react';



const useStyles = (theme) => ({
  root: {
    display: `flex`,
    alignItems: `center`
  },
  activeFalse: {
    color: `#ccc`
  },
  count: {
    width: `35px`,
    minWidth: `35px`,
    textAlign: TextAlign.CENTER
  },
  person: {
    width: `270px`,
    minWidth: `270px`
  },
  roleType: {
    width: `150px`,
    minWidth: `150px`
  },
  role: {
    width: `150px`,
    minWidth: `150px`
  },
  email: {
    width: `150px`,
    minWidth: `150px`
  },
  mileage: {
    width: `100px`,
    minWidth: `100px`
  },
  mileageDate: {
    width: `100px`,
    minWidth: `100px`
  },
  description: {
    // whiteSpace: WhiteSpace.NOWRAP,
    // textOverflow: `ellipsis`,
    maxHeight: `75px`,
    overflow: `hidden`,
    width: `100%`,
    fontSize: `0.8rem`,
    lineHeight: 1.1
  }
});



type Props = {
  loading? : boolean;
  count    : number;
  item?    : User;
  role?    : string;
};

/**
 * Строка таблицы справочника Пользователей
 */
const RowContent: React.FC<Props> = ({ count, item, role, loading }) => {
  const
    sx = useStyles(useTheme()),
    _item = React.useMemo(() => item, [item, loading]);

  return (
    <Box sx={{ ...sx.root, ...cl(sx.activeFalse, !_item.active) }}>
      <Cell sx={sx.count}>{count.toString()}</Cell>
      <Cell sx={sx.person}>{getFio(_item.person)}</Cell>
      <Cell sx={sx.roleType}>{_item.role.type}</Cell>
      <Cell sx={sx.role}>{role}</Cell>
      <Cell sx={sx.email}>{_item.email}</Cell>
      <Cell sx={sx.description}>{_item.description}</Cell>
    </Box>
  );
};

const mapStateToProps = (state: State, props: Props) => ({
  loading : getLoading(state),
  role    : getRoleByItem(state, props)
});

export default connect(mapStateToProps)(RowContent);

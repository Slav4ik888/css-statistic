import * as React from 'react';
// Redux Stuff
import {connect} from 'react-redux';
// import { getRoleById } from '../../../../redux/selectors/ref-books/ref-books';
import { State } from '../../../../redux/redux-types';
// MUI Stuff
import { Typography } from '@mui/material';
// Types
// import { Role, User } from '../../../../../types';


type Props = {
  // user  : User;
  // role? : Role;
};

const RoleCnt: React.FC<Props> = ({ }) => {
  // if (!role) return null;

  return (
    <Typography variant="body2" sx={{ color: 'secondary.dark' }} noWrap>
      {/* {role?.role || `Роль не указана`} */}
    </Typography>
  )
};

const mapStateToProps = (state: State, props: Props) => ({
  // role: getRoleById(state, props)
});

export default connect(mapStateToProps)(RoleCnt);

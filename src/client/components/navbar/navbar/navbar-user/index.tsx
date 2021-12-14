import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import * as u from '../../../../redux/selectors/user';
import { State } from '../../../../redux/redux-types';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import StatisticsMenuBtn from '../../btns/statistics';
// Functions



type Props = {
  loadingUser: boolean;
  authenticated: boolean;
  history: { location: { pathname: string }, push: (path: string) => void };
};


// Кнопки Navbar после авторизации
const NavbarUser: React.FC<Props> = ({ loadingUser, authenticated, history }) => {
  if (loadingUser || !authenticated) return null;

  
  return (
    <Box sx={{ display: `flex` }}>
      <StatisticsMenuBtn history={history} />
    </Box>
  );
};


const mapStateToProps = (state: State) => ({
  loadingUser: u.getLoadingUser(state),
  authenticated: u.getAuthenticated(state),
});


export default connect(mapStateToProps)(NavbarUser);
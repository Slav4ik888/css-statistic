import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getAuthenticated } from '../../../../redux/selectors/user';
import { State } from '../../../../redux/redux-types';
// MUI Stuff
import Box from '@mui/material/Box';
// Components
import StatisticsMenuBtn from '../../btns/statistics';
import RefBooksMenuBtn from '../../btns/ref-books';


type Props = {
  authenticated : boolean;
  history       : { location: { pathname: string }, push: (path: string) => void };
};


/**
 * Кнопки Navbar после авторизации
 */
const NavbarUser: React.FC<Props> = ({ authenticated, history }) => {
  if (!authenticated) return null;

  
  return (
    <Box sx={{ display: `flex` }}>
      <StatisticsMenuBtn history={history} />
      <RefBooksMenuBtn />
    </Box>
  );
};


const mapStateToProps = (state: State) => ({
  authenticated: getAuthenticated(state)
});

export default connect(mapStateToProps)(NavbarUser);

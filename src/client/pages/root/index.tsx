import * as React from 'react';
// Readux Stuff
import { connect } from 'react-redux';
import * as u from '../../redux/selectors/user';
// Components
import CircularProgress from '../../components/buttons/circular-progress/circular-progress';
import RootAuthContainer from './root-auth-container';
import RootNotAuthContainer from './root-not-auth-container';
import { State } from '../../redux/redux-types';
// Functions


const styleProgress = {
  position: `absolute`,
  top: `calc(50% - 30px)`,
  left: `calc(50% - 30px)`,
};


type Props = {
  loadingUser: boolean;
  authenticated: boolean;
};


// Главная страница
const RootPage: React.FC<Props> = ({ loadingUser, authenticated }) => {
  if (loadingUser) return <CircularProgress loading={loadingUser} size={60} classname={styleProgress} />

  
  return (
    <>
      <RootAuthContainer
        authenticated={authenticated}
      />
      <RootNotAuthContainer
        authenticated={authenticated}
      />
    </>
  );
}

const mapStateToProps = (state: State) => ({
  loadingUser: u.getLoadingUser(state),
  authenticated: u.getAuthenticated(state),
});

export default connect(mapStateToProps)(RootPage);

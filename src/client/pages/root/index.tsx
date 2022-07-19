import * as React from 'react';
// Readux Stuff
import { connect } from 'react-redux';
import { getAuthenticated } from '../../redux/selectors/user';
// Components
import RootAuthContainer from './root-auth-container';
import RootNotAuthContainer from './root-not-auth-container';
import { State } from '../../redux/redux-types';



type Props = {
  authenticated: boolean;
};


/**
 * Главная страница
 */
const RootPage: React.FC<Props> = ({ authenticated }) => {
  
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
  authenticated: getAuthenticated(state)
});

export default connect(mapStateToProps)(RootPage);

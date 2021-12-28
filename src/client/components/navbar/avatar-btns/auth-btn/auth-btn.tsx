import * as React from 'react';
// Redux
import { connect } from 'react-redux';
import { State } from '../../../../redux/redux-types';
import { getScreenFormats } from '../../../../redux/selectors/ui';
import { getAuthenticated } from '../../../../redux/selectors/user';
// Icons
import MobileAuthBtn from './mobile/mobile-auth-btn';
import AnyAuthBtn from './any/any-auth-btn'
// Types
import { ScreenFormats } from '../../../../../types/index';



type Props = {
  authenticated: boolean;
  screenFormat: ScreenFormats;
};


// Кнопка Navbar для входа в авторизацию
const AuthBtn: React.FC<Props> = ({ authenticated, screenFormat }) => {
  if (authenticated) return null;

  return (
    <>
      <MobileAuthBtn screenFormat={screenFormat} />
      <AnyAuthBtn screenFormat={screenFormat} />
    </>
  );
};


const mapStateToProps = (state: State) => ({
  authenticated: getAuthenticated(state),
  screenFormat: getScreenFormats(state),
});

export default connect(mapStateToProps)(AuthBtn);
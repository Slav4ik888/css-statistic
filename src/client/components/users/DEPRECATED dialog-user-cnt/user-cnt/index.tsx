import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getUserId } from '../../../../redux/selectors/user';
import { State } from '../../../../redux/redux-types';
// Components
import UserProfile from './profile';
// Functions
import mergeWithTemplate from '../../merge-with-template';
// Types
import { User, CardType } from '../../../../../types';
import { UseGroup } from '../../../../utils/hooks';



type Props = {
  type    : CardType;
  group   : UseGroup<User>;
  userId? : string; // If new user
};


const UserCnt: React.FC<Props> = ({ type, group: U, userId }) => {
  
  React.useEffect(() => {
    if (type === CardType.ADD && userId)
      U.setGroup(mergeWithTemplate({} as User, userId));
  }, [userId]);


  return (
    <UserProfile
      type  = {type}
      group = {U}
    />
  );
};


const mapStateToProps = (state: State) => ({
  userId: getUserId(state)
});

export default connect(mapStateToProps)(UserCnt);

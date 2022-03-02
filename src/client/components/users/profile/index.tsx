import * as React from 'react';
// Redux
import { State } from '../../../redux/redux-types';
import { getLoadingUser } from '../../../redux/selectors/user';
import { connect } from 'react-redux';
// Components
import Personal from './modules/personal';
import Role from './modules/role';
import Actions from '../../containers/actions';
// Functions
import { empty } from '../../../../utils/objects';
// Types
import { User, CardType } from '../../../../types';
import { UseGroup } from '../../../utils/hooks/types';



type Props = {
  loading? : boolean;
  type     : CardType;
  group    : UseGroup<User>;
};


const UserProfile: React.FC<Props> = ({ loading, type, group: G }) => {
  if (empty(G.group)) return null;
  
  return (
    <>
      <Personal group={G} type={type} />
      <Role group={G} />

      <Actions
        loading={loading}
        hookOpen= {}
      />
    </>
  );
};

const mapStateToProps = (state: State) => ({
  loading: getLoadingUser(state)
})

export default connect(mapStateToProps)(UserProfile);

import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getUserId } from '../../../redux/selectors/user';
import { State } from '../../../redux/redux-types';
// MUI Stuff
import { Box } from '@mui/material';
// Components
import UserProfile from '../profile';
// Functions
import { useGroup } from '../../../utils/hooks';
import mergeWithTemplate from '../merge-with-template';
// Types & Styles
import { themes, cl, FlexDirection, Position } from '../../../utils/styles';
import { useTheme } from '@emotion/react';
import { UserCardType, User } from '../../../../types';



const useStyles = (theme) => ({
  root: {
    display: `flex`,
    flexDirection: FlexDirection.COLUMN
  },
});


type Props = {
  userId?: string;
};


const NewUserCnt: React.FC<Props> = ({ userId }) => {
  const sx = useStyles(useTheme());
  const newUserTemp = React.useMemo(() => mergeWithTemplate({} as User, userId), []);
  const G = useGroup(true, newUserTemp);

  return (
    <Box sx={sx.root}>
      <UserProfile
        type  = {UserCardType.ADD}
        group = {G}
      />
    </Box>
  );
};


const mapStateToProps = (state: State) => ({
  userId: getUserId(state)
});

const mapActionsToProps = {
};

export default connect(mapStateToProps, mapActionsToProps)(NewUserCnt);

import * as React from 'react';
// MUI Stuff
import { Box } from '@mui/material';
// Components
import UserProfile from '../profile';
// Functions
// Types & Styles
import { FlexDirection } from '../../../utils/styles';
import { useTheme } from '@emotion/react';
import { User, CardType } from '../../../../types';
import { UseGroup } from '../../../utils/hooks/types';


const useStyles = (theme) => ({
  root: {
    display: `flex`,
    flexDirection: FlexDirection.COLUMN
  },
});


type Props = {
  group: UseGroup<User>;
};


const UsersCnt: React.FC<Props> = ({ group: G }) => {
  const sx = useStyles(useTheme());


  return (
    <Box sx={sx.root}>
      <UserProfile
        type  = {CardType.EDIT}
        group = {G}
      />
    </Box>
  );
};

export default UsersCnt;

import * as React from 'react';
// MUI Stuff
import { Grid, Box } from '@mui/material';
// Components
import FirstList from '../first-list';
// Functions
import { arrFromObj } from '../../../../../../../../../utils/objects/objects';
// Types
import { CredSchemeItem, Role } from '../../../../../../../../../types';
import { UseGroup } from '../../../../../../../../utils/hooks/types';
// Consts
import { Scheme } from '../../../../../../../../consts/credentials';
// Style
import { FlexDirection } from '../../../../../../../../utils/styles';


const rootStyle = {
  display: `flex`,
  flexDirection: FlexDirection.COLUMN,
  width: `100%`,
  my: 2,
  pl: 1.5, pr: 1
};


type Props = {
  group: UseGroup<Role>;
};


const CredentialsList: React.FC<Props> = ({ group }) => {
  const schemeArr = arrFromObj(Scheme) as unknown as Array<CredSchemeItem>;


  return (
    <Grid item sm={12}>
      <Box sx={rootStyle}>
        {
          schemeArr.map(item => <FirstList
            key      = {item.id}
            credItem = {item}
            group    = {group}
          />)
        }
      </Box>
    </Grid>
  );
};


export default CredentialsList;

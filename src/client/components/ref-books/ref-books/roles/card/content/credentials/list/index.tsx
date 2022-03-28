import * as React from 'react';
// MUI Stuff
import { Grid, Box } from '@mui/material';
// Components
import FirstList from '../first-list';
// Functions
import { arrFromObj } from '../../../../../../../../../utils/objects';
// Types & Consts & Style
import { CredSchemeItem, Role } from '../../../../../../../../../types';
import { UseGroup } from '../../../../../../../../utils/hooks/types';
import { FlexDirection } from '../../../../../../../../utils/styles';
import Scheme from '../../../../../../../../consts/credentials/scheme';


const rootStyle = {
  display       : `flex`,
  flexDirection : FlexDirection.COLUMN,
  width         : `100%`,
  my            : 2,
  pl            : 1.5,
  pr            : 1
};


type Props = {
  group: UseGroup<Role>;
};


const CredentialsList: React.FC<Props> = ({ group: G }) => {
  const schemeArr = arrFromObj(Scheme) as unknown as Array<CredSchemeItem>;
  console.log('schemeArr: ', schemeArr);


  return (
    <Grid item sm={12}>
      <Box sx={rootStyle}>
        {
          schemeArr.map(item => <FirstList
            key      = {item.id}
            credItem = {item}
            group    = {G}
          />)
        }
      </Box>
    </Grid>
  );
};


export default CredentialsList;

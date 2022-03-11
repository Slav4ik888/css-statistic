import * as React from 'react';
// MUI Stuff
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// Components
import CardBlock from '../../../containers/card/block';
import PhonesList from './phones-list/phones-list';
import AddBtn from '../../../buttons/add-btn';
// Functions
import { createId } from '../../../../../utils/helpers/create-id/create-id';
import { updateArrWithItemByField } from '../../../../../utils/arrays/update-arr-with-item-by-field';
import { changeObject } from '../../../../utils/hooks/change-hook-object';
import { getArrWithoutItemByField } from '../../../../../utils/arrays/get-arr-without-item-by-field-obj';
// Types
import { Contact, Driver, DriverCarrier, Phone, PhoneType } from '../../../../../types';
import { UseGroup } from '../../../../utils/hooks/types';
import changeGroup from '../../../../utils/hooks/change-group';



type Props = {
  group: UseGroup<Driver | DriverCarrier | Contact>;
};


const PhonesCnt: React.FC<Props> = ({ group: G }) => {

  const scheme = `phones`;

  const handleAdd = () => {
    const emptyPhone: Phone = ({
      id: createId(G.group.phones),
      type: PhoneType.WORK,
      number: ``,
      extension: ``,
      description: ``
    });

    changeGroup(G, [{ value: [...G.group.phones, emptyPhone], scheme }]);
  };

  const handleChange = (phone: Phone) => {
    const newPhones = updateArrWithItemByField(G.group.phones, `id`, phone);
    changeGroup(G, [{ value: newPhones, scheme }]);
  };

  const handleDel = (phone: Phone) => {
    const newPhones = getArrWithoutItemByField(G.group.phones, `id`, phone);
    changeGroup(G, [{ value: newPhones, scheme }]);
  };

  return (
    <CardBlock label="Телефоны">
      <Grid item xs={12}>
        <Box sx={{ display: `flex`, flexDirection: `column` }}>
          <PhonesList phones={G.group.phones} onChange={handleChange} onDel={handleDel} />
          <AddBtn onAdd={handleAdd} />
        </Box>
      </Grid>
    </CardBlock>
  );
};


export default PhonesCnt;

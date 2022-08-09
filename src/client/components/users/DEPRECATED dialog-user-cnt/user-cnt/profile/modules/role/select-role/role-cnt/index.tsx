import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getErrors } from '../../../../../../../../../redux/selectors/ui';
import { State } from '../../../../../../../../../redux/redux-types';
// MUI Stuff
import { Box } from '@mui/material';
// Components
import { TextfieldItem } from '../../../../../../../../containers/cards/items';
import Actions from '../actions';
// Types, Styles
import { CardType, Errors, Role } from '../../../../../../../../../../types';
import { UseGroup } from '../../../../../../../../../utils/hooks';



const useStyles = () => ({
  root: {
    mt: 3,
    width: `100%`
  }
});


type Props = {
  type    : CardType;
  group   : UseGroup<Role>;
  errors? : Errors;
};


const RoleCnt: React.FC<Props> = ({ type, group: R, errors }) => {
  const
    sx = useStyles(),
    edit = type === CardType.EDIT;
  
  return (
    <Box sx={sx.root}>
      <TextfieldItem
        grid        = {{ sm: 12 }}
        label       = 'Роль'
        placeholder = 'Введите название роли'
        group       = {R}
        scheme      = 'role'
        errors      = {errors}
      />

      <Actions type={type} group={R} />
    </Box>
  )
};

const mapStateToProps = (state: State) => ({
  errors: getErrors(state)
});

export default connect(mapStateToProps)(RoleCnt);

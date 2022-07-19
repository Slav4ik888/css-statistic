import * as React from 'react';
// MUI Stuff
import { Box } from '@mui/material';
// Icons
import Edit from '@mui/icons-material/Edit';
// Functions
import { useValue } from '../../../../utils/hooks';
// Types
import { SearchOptionType } from '../../../../../types';
import { fc_sb } from '../../../../utils/styles';



const useStyles = () => ({
  root: {
    ...fc_sb,
    '&.MuiAutocomplete-option': {
      justifyContent: `space-between`
    },
    '&:hover': {
      backgroundColor: `#eee`
    },
    transition: `background 0.3s ease-out`
  }
});


type Props = {
  option        : SearchOptionType;
  onClick?      : (e: any, option: SearchOptionType) => void;
  onTouchStart? : (e: any) => void;
  onMouseOver?  : (e: any) => void;
  onEdit        : (option: SearchOptionType) => void;
};

// state        : {selected: false, inputValue: ''};

/**
 * Props is:
 * * aria-disabled: false
 * * aria-selected: false
 * * className: "MuiAutocomplete-option"
 * * data-option-index: 65
 * * id: "Ref-Search-option-65"
 * * onClick: event => {…}
 * * onMouseOver: event => {…}
 * * onTouchStart: () => { isTouch.current = true; }
 * * option: {inputValue: '', title: 'Баллоны с хладоном на паллете', id: 'xLposwARKra4oUTXBDA7'}
 * * role: "option"
 * * tabIndex: -1
 */
const Li: React.FC<Props> = (props) => {
  const
    sx = useStyles(),
    { option, onClick, onEdit } = props,
    O = useValue(),
    newProps = Object.assign({}, props);

  delete newProps.onEdit;
  
  const
    noop              = () => { },
    handlerEdit       = () => onEdit(option),
    handlerMouseEnter = () => O.setOpen(),
    handlerMouseLeave = () => O.setClose(),
    handlerClick      = (e, option: SearchOptionType) => e.target.closest(`svg`) ? handlerEdit() : onClick(e, option);


  return (
    <Box
      {...newProps}
      component    = 'li'
      sx           = {sx.root}
      onMouseEnter = {handlerMouseEnter}
      onMouseLeave = {handlerMouseLeave}
      onTouchStart = {noop}
      onMouseOver  = {noop}
      onClick      = {(e) => handlerClick(e, option)}
    >
      <div>{option.title}</div>
      {
        option.id && O.open && <Edit onClick={handlerEdit} />
      }
    </Box>
  );
};

export default Li;

import * as React from 'react';
// MUI Stuff 
import { Tooltip, FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';
// Components
import GridWrap from '../../grid-wrap';
import BoxWrap from '../../box-wrap';
// Functions
import { getValueByScheme, UseGroup, changeGroup } from '../../../../utils/hooks';
// Types & Styles
import { GridStyle } from '../../../../../types';
import { useTheme } from '@emotion/react';
import { Themes } from '../../../../utils/styles';



const useStyles = (theme: Themes) => ({
  checkbox: {
    backgroundColor: theme.cardBlock.textfield.background,
    mx: 2
  }
});


type Props = {
  grid?         : GridStyle;
  box?          : boolean;
  group?        : UseGroup<any>;
  // Tooltip
  toolTitle?    : string;
  // Chekbox
  label         : string;
  disabled?     : boolean;
  // Control
  scheme        : string;
};


const Checkbox: React.FC<Props> = (props) => {
  const
    { box, toolTitle, label, scheme, disabled, group: G } = props,
    sx   = useStyles(useTheme() as Themes),
    Wrap = box ? BoxWrap : GridWrap;

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return null;

    changeGroup(G, [{ value: e.target.checked, scheme }]);
  };

  return (
    <Wrap {...props}>
      <Tooltip title={toolTitle || ""} arrow enterDelay={1000} enterNextDelay={1000}>
        <FormControlLabel
          value          = "top"
          label          = {label}
          labelPlacement = "end"
          onChange       = {handleChange}
          control        = {<MuiCheckbox
                              disabled = {disabled}
                              checked  = {getValueByScheme(G, scheme)}
                              sx       = {sx.checkbox}
                            />}
        />
      </Tooltip>
    </Wrap>
  )
};

export default Checkbox;
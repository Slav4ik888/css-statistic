import * as React from 'react';
// Components
import BoxLabel from '../box-label';
import GridWrap from '../grid-wrap';
import BoxWrap from '../box-wrap';
// Types
import { UseBase } from '../../../utils/hooks';
import { GridStyle } from '../../../../types';
import { fcc } from '../../../utils/styles';



type Props = {
  grid?      : GridStyle;
  children   : string | JSX.Element;
  toolTitle? : string;
  label?     : string;
  select     : UseBase;
  sx?        : {
                  width?           : number | string,
                  height?          : number | string,
                  minHeight?       : number | string,
                  maxHeight?       : number | string,
                  border?          : string,
                  m?               : number | string,
                  mt?              : number | string,
                  mr?              : number | string,
                  ml?              : number | string,
                  mb?              : number | string,
                  backgroundColor? : string
                };
}; 

/**
 * Вспомогательный текстовый компонент
 */
const SelectText: React.FC<Props> = (props) => {
  const { grid, toolTitle, label, children, select, sx } = props;
  if (select.open) return null;

  const box = {
    ...fcc,
    border    : sx?.border,
    width     : sx?.width || 100,
    height    : sx?.height || 56, // 36,
    minHeight : sx?.minHeight || sx?.height || 56, // 36,
    maxHeight : sx?.maxHeight || sx?.height || 56, // 36,
    m : sx?.m  || 0,
    mt: sx?.mt || 0,
    mr: sx?.mr || 2,
    mb: sx?.mb || 0,
    ml: sx?.ml || 0,
    p: 0,
    backgroundColor: sx?.backgroundColor || `inherit`
  };

  if (!sx?.border) delete box.border;
  
  const Wrap = grid ? GridWrap : BoxWrap;
  return (
    <Wrap {...props}>
      <BoxLabel
        label     = {label}
        toolTitle = {toolTitle}
        onClick   = {select.setOpen}
        style     = {{ box }}
      >
        {
          children
        }
      </BoxLabel>
    </Wrap>
  );
};

export default SelectText;

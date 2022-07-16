import * as React from 'react';
// Components
import RefSearch from './search';
import EditItem from './edit-item';
// Functions
import { useGroup, useValue } from '../../../utils/hooks';
// Types
import { SearchType, SearchOptionType, RefbookId } from '../../../../types';



type Props = {
  open?      : boolean;
  type       : SearchType;
  items      : any;
  refbookId  : RefbookId;
  classname? : object;
  onSelect   : (id?: string, add?: boolean) => void;
};


const RefSearchBox: React.FC<Props> = ({ open, type, items, classname, refbookId, onSelect }) => {
  const
    Edit = useGroup<any>(),
    E    = useValue<SearchOptionType>();

  
  const handlerEdit = (option: SearchOptionType) => {
    Edit.setOpen();
    E.setValue(option, true);
  };

  return (
    <>
      <RefSearch
        open      = {open}
        type      = {type}
        items     = {items}
        classname = {classname}
        onSelect  = {onSelect}
        onEdit    = {handlerEdit}
      />
    
      <EditItem
        group     = {Edit}
        refbookId = {refbookId}
        checkedId = {E.value?.id}
      />
    </>
  );
};

export default RefSearchBox;

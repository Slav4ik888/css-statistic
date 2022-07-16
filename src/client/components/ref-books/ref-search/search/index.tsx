import * as React from 'react';
// MUI Stuff
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
// Components
import Li from '../li';
// Functions
import { getSearchLabel, getSearchTitles } from './utils';
// Types
import { SearchType, SearchOptionType, SearchOptionsTypes } from '../../../../../types';



const filter = createFilterOptions<SearchOptionType>();


type Props = {
  open?      : boolean;
  type       : SearchType;
  items      : any;
  classname? : object;
  onEdit?    : (option: SearchOptionType) => void;  // For edit selected item
  onSelect   : (id?: string, add?: boolean) => void;
};


const RefSearch: React.FC<Props> = ({ open, type, items, classname, onEdit, onSelect }) => {
  const
    searchTitles      = React.useMemo(() => getSearchTitles(type, items), [items]),
    [value, setValue] = React.useState<SearchOptionType | null>(null),
    searchLabel       = getSearchLabel(type);

  
  const handleChange = (event, newValue: SearchOptionType | string) => {
    console.log('newValue: ', newValue);
    if (typeof newValue === `string`) {
      setTimeout(() => {
        setValue(null);
        onSelect(null, true);
      });
    }
    else if (newValue?.inputValue) {
      setValue(null);
      onSelect(null, true);
    }
    else {
      setValue(null);
      onSelect(newValue.id)
    }
  };


  if (type === SearchType.NO_SELECT) return null;

  return (
    <Autocomplete
      selectOnFocus
      clearOnBlur
      freeSolo
      handleHomeEndKeys
      id             = "Ref-Search"
      open           = {open}

      value          = {value}
      options        = {searchTitles}
      getOptionLabel = {(option) => {
        // e.g value selected with enter, right from the input
        if (typeof option === 'string') return option;
        if (option.inputValue) return option.inputValue;
        return option.title;
      }}
      renderInput    = {(params) => <TextField {...params} label={searchLabel} />}
      renderOption   = {(props, option: SearchOptionType) => <Li {...props} key={option.id} option={option} onEdit={onEdit} />}

      onChange       = {handleChange}
      filterOptions  = {(options, params) => {
        const filtered = filter(options as SearchOptionsTypes, params);
        // if (params.inputValue !== '') {
        //   filtered.push({
        //     inputValue: params.inputValue,
        //     title: `Создать новый`, // "${params.inputValue}"`,
        //     id: ``
        //   });
        // }
        // return filtered;
        return [{
            inputValue: `new-item`,
            title: `Создать новый`,
            id: ``
          }, ...filtered]
      }}
      sx={{ width: `100%`, mb: 2, ...classname }}
    />
  );
};

export default RefSearch;

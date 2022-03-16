import * as React from 'react';
// MUI Stuff
import { Box, TextField, Autocomplete, createFilterOptions } from '@mui/material';
// Components
// Functions
import { getSearchTitles } from '../utils/get-search-titles';
// Types
import { SearchType, SearchOptionType } from '../../../../types';



const filter = createFilterOptions<SearchOptionType>();


type Props = {
  open?      : boolean;
  type       : SearchType;
  items      : any;
  classname? : object;
  onSelect   : (id?: string, add?: boolean) => void;
};


const RefSearch: React.FC<Props> = ({ open, type, items, classname, onSelect }) => {
  if (type === SearchType.NO_SELECT) return null;

  const searchTitles = React.useMemo(() => getSearchTitles(type, items), [items]);
  const [value, setValue] = React.useState<SearchOptionType | null>(null);

  const handleChange = (event, newValue: SearchOptionType | string) => {
    // console.log('newValue: ', newValue);

    if (typeof newValue === `string`) {
      // timeout to avoid instant validation of the dialog's form.
      setTimeout(() => {
        // console.log(`newValue string: `, newValue);
        setValue(null);
        onSelect(null, true);
      });
    }
    else if (newValue && newValue.inputValue) {
      // console.log(`newValue.inputValue: `, newValue.inputValue);
      setValue(null);
      onSelect(null, true);
    }
    else {
      setValue(null);
      onSelect(newValue.id)
    }
  };

  const searchLabel = "Найти или создать... введите условие для поиска...";

  return (
    <>
      <Autocomplete
        open          = {open}
        value         = {value}
        onChange      = {handleChange}
        filterOptions = {(options, params) => {
          const filtered = filter(options, params);
          // if (params.inputValue !== '') {
          //   filtered.push({
          //     inputValue: params.inputValue,
          //     title: `Создать новый`, // "${params.inputValue}"`,
          //     id: ``
          //   });
          // }
          // return filtered;
          return [{
              id         : ``,
              inputValue : `new-item`,
              title      : `Создать новый`
            }, ...filtered]
        }}
        id             = "Ref-Search"
        options        = {searchTitles}
        getOptionLabel = {(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === 'string') return option;
          if (option.inputValue) return option.inputValue;
          return option.title;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        freeSolo
        renderOption = {(props, option) => <li {...props}>{option.title}</li>}
        sx           = {{ width: `100%`, ...classname }}
        renderInput  = {(params) => <TextField {...params} label={searchLabel} />}
      />
    </>
  );
};

export default RefSearch;

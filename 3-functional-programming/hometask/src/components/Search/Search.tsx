import { useEffect, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import styles from './Search.module.scss';
import { Row } from '../Table';
import { searchData } from '../../util/functions';

interface SearchProps {
  storeData?: Row[];
  updateStoreData?: (val) => void;
}


export function Search({storeData, updateStoreData}: SearchProps) {
  const [searchedValue, setSearchedValue] = useState<string>('');

  const onChange = (value) => {
    console.log(value); // for debugging
    setSearchedValue(value);
  }

  useEffect(() => {
    if(searchedValue !== '') {
      let filterOption =  searchedValue.toLowerCase();
      updateStoreData(searchData(storeData, filterOption));
    } else {
      updateStoreData(storeData);
    }
  }, [storeData, updateStoreData, searchedValue])

  return (
    <OutlinedInput
      className={styles.input}
      placeholder="Search by country/name/username"
      value={searchedValue}
      type="search"
      onChange={(e) => onChange(e.target.value)}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
}

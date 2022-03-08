import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import _ from 'lodash';
import styles from './Sort.module.scss'
import { useEffect, useState } from 'react';
import { Row } from '../Table';

interface SortProps {
  storeData?: Row[];
  updateStoreData?: (val) => void;
}

export function Sort({ storeData, updateStoreData }: SortProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('');

  const handleChange = (value) => {
    console.log(value); // for debugging
    setSelectedFilter(value)

  };

  useEffect(() => {
    let rows = [];
    if (selectedFilter.includes('desc')) {
      rows = _.orderBy(storeData, ['lastPayments'], ['desc']);
    }
    if (selectedFilter.includes('asc')) {
      rows = _.orderBy(storeData, ['lastPayments'], ['asc']);
    }
    if (selectedFilter === '') {
      rows = storeData;
    }

    updateStoreData(rows);
  }, [storeData, updateStoreData, selectedFilter])



  return (
    <FormControl className={styles.control} component="fieldset">
      <FormLabel className={styles.label}>
        Sort by payments
      </FormLabel>
      <RadioGroup
        className={styles.group}
        aria-label="sorting"
        name="radio-buttons-group"
        onChange={(e) => handleChange(e.target.value)}
      >
        <FormControlLabel value="desc" control={<Radio />} label="desc" />
        <FormControlLabel value="asc" control={<Radio />} label="asc" />
      </RadioGroup>
    </FormControl>
  );
}

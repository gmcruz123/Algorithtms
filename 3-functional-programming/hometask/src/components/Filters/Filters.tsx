import { useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

import styles from './Filters.module.scss';
import { Row } from '../Table';
import _ from 'lodash';
import { filterData } from '../../util/functions';

interface FiltersProps {
  storeData?: Row[];
  updateData?: (val) => void;
}


const OPTIONS = [
  {
    title: 'Without posts',

  },
  {
    title: 'More than 100 posts',
  },
];

export function Filters({ storeData, updateData }: FiltersProps) {
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);

  const onChange = ({ title }) => {
    console.log(title); // for debugging

    let updatedFilters;
    if (selectedFilter.find((filter) => filter === title)) {
      updatedFilters = selectedFilter.filter(
        (filter) => filter !== title
      );
    } else {
      updatedFilters = [...selectedFilter, title];
    }

    setSelectedFilter(updatedFilters);

  };

  useEffect(() => {
    let rows = [];

    if (selectedFilter.length === 0) {
      rows = storeData;
    }

    if (_.includes(selectedFilter,'Without posts')) {
      rows = filterData(rows, storeData, 0)
    }
    if (_.includes(selectedFilter,'More than 100 posts')) {
      rows = filterData(rows, storeData, 100)    
    }
    
    updateData(rows);
  }, [storeData, updateData, selectedFilter])



  return (
    <div className={styles.group}>
      <div className={styles.title}>Filter by posts</div>
      <ul className={styles.list}>
        {OPTIONS.map((option) => (
          <li
            value={option.title}
            onClick={() => onChange(option)}
            key={option.title}
          >
            <Checkbox
              checked={!!selectedFilter.find(filter => filter === option.title)}
              value={option.title}
              onChange={() => onChange(option)}
              size="small"
              color="primary"
            />{' '}
            {option.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

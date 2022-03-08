import { useState, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { Table, Filters, Sort, Search } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';

import styles from './App.module.scss';

import type { Row } from './components';
import type { Image, User, Account } from '../types';

import rows from './mocks/rows.json';
import { dataConverter } from './util/dataConverter';

// mockedData has to be replaced with parsed Promises’ data
const mockedData: Row[] = rows.data;

function App() {
  const [data, setData] = useState<Row[]>(undefined);
  const [storeTable, setStoreTable] = useState<Row[]>();

  useEffect(() => {
    // fetching data from API
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]: [Image[], User[], Account[]]) =>
      setData(dataConverter(users, accounts, images)) 
    );
  }, [])

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters storeData={data}  updateData={setStoreTable}/>
            <Sort storeData={data}  updateStoreData={setStoreTable} />
          </div>
          <Search storeData={data} updateStoreData={setStoreTable} />
        </div>
        <Table rows={storeTable || data || mockedData } />
      </div>
    </StyledEngineProvider>
  );
}

export default App;

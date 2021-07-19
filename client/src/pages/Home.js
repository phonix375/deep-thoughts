import React from 'react';
import { useQuery } from '@apollo/client';
import {QUERY_THOUGHTS} from '../utils/queries';

const Home = () => {
  //use useQuery Hook to make qyert request
  const {loading, data} = useQuery(QUERY_THOUGHTS);
  const thoghts = data?.thoghts || [];
  console.log(thoghts);

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>{/* PRINT THOUGHT LIST */}</div>
      </div>
    </main>
  );
};

export default Home;

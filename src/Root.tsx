import React from 'react';
import {SWRConfig} from 'swr';

import App from './App';

const Root = () => {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,

        dedupingInterval: 60000,
        revalidateIfStale: false,
      }}>
      <App />
    </SWRConfig>
  );
};

export default Root;

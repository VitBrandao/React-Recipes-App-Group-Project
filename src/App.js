import React from 'react';
import RootProvider from './contexts/RootProvider';
import Routes from './Routes';

const App = () => (
  <RootProvider>
    <Routes />
  </RootProvider>
);

export default App;

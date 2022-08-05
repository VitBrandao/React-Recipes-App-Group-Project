import React from 'react';
import { Switch } from 'react-router-dom';
import RecipesProvider from './contexts/RecipesProvider';
import Routes from './Routes/index';

function App() {
  return (
    <div>
      <RecipesProvider>
        <Switch>
          <Routes />
        </Switch>
      </RecipesProvider>
    </div>
  );
}

export default App;

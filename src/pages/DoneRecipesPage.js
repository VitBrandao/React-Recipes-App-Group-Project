import React from 'react';
import Header from '../components/Header';

const DoneRecipesPage = () => (
  <div>
    <Header showSearchButton={ false } />
    <h1 data-testid="page-title">Done Recipes</h1>
  </div>
);

export default DoneRecipesPage;

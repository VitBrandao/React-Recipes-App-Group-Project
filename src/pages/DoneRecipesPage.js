import React from 'react';
import DoneRecipes from '../components/DoneRecipes';
import Header from '../components/Header';

const DoneRecipesPage = () => (
  <div>
    <Header showSearchButton={ false } />
    <h1 data-testid="page-title">Done Recipes</h1>
    <DoneRecipes />
  </div>
);

export default DoneRecipesPage;

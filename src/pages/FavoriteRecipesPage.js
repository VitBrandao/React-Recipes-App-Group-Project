import React from 'react';
import Header from '../components/Header';

const FavoriteRecipes = () => (
  <div>
    <Header showSearchButton={ false } />
    <h1 data-testid="page-title">Favorite Recipes</h1>
  </div>
);

export default FavoriteRecipes;

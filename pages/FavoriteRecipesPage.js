import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import FavoriteRecipes from '../components/FavoriteRecipes';

function FavoriteRecipesPage() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [filteredFavoriteRecipes, setFilteredFavoriteRecipes] = useState([]);

  const handleClick = (event) => {
    let { name } = event.target;
    if (name === 'comida') {
      name = 'food';
    } else if (name === 'bebida') {
      name = 'drink';
    } else {
      name = '';
    }
    const getFavoriteRecipes = favoriteRecipes.filter((recipe) => (
      recipe.type.includes(name)
    ));
    setFilteredFavoriteRecipes(getFavoriteRecipes);
  };

  const unFavorite = (event) => {
    const { name } = event.target;
    const filteredRecipes = favoriteRecipes.filter((recipe) => (
      recipe.name !== name
    ));
    localStorage.setItem('favoriteRecipes', JSON.stringify(filteredRecipes));
    const favoriteRecipesLocalStorage = JSON.parse(localStorage
      .getItem('favoriteRecipes'));
    setFavoriteRecipes(favoriteRecipesLocalStorage);
    setFilteredFavoriteRecipes(favoriteRecipesLocalStorage);
  };

  useEffect(() => {
    if (!localStorage.getItem('favoriteRecipes')) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    } else {
      const favoriteRecipesLocalStorage = JSON.parse(localStorage
        .getItem('favoriteRecipes'));
      setFavoriteRecipes(favoriteRecipesLocalStorage);
      setFilteredFavoriteRecipes(favoriteRecipesLocalStorage);
    }
  }, []);

  return (
    <div>
      <Header title="Receitas Favoritas" />
      <h1 data-testid="page-title">Favorite Recipes</h1>
      <FavoriteRecipes
        handleClick={ handleClick }
        filteredFavoriteRecipes={ filteredFavoriteRecipes }
        unFavorite={ unFavorite }
      />
    </div>
  );
}
export default FavoriteRecipesPage;

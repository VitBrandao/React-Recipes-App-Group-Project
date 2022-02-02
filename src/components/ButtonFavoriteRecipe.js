import React, { useContext, useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import RecipeDetailContext from '../contexts/RecipeDetailContext';

const ButtonFavoriteRecipe = () => {
  const { recipeObject: recipe } = useContext(RecipeDetailContext);
  const [favoritedRecipe, setFavoritedRecipe] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    const isFavorite = favoriteRecipes.some(({ id: idRecipe }) => idRecipe === id);
    if (isFavorite) setFavoritedRecipe(true);
  }, [id]);

  const favoritedIcon = favoritedRecipe ? blackHeartIcon : whiteHeartIcon;

  const favoriteRecipe = () => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    if (favoritedRecipe) {
      const filteredRecipes = favoriteRecipes.filter(
        ({ id: idRecipe }) => id !== idRecipe,
      );
      localStorage.setItem('favoriteRecipes', JSON.stringify(filteredRecipes));
    } else {
      localStorage.setItem('favoriteRecipes',
        JSON.stringify([...favoriteRecipes, recipe]));
    }
    setFavoritedRecipe(!favoritedRecipe);
  };

  return (
    <Button marginRight="2" onClick={ favoriteRecipe }>
      <img
        src={ favoritedIcon }
        alt="favorite recipe"
        data-testid="favorite-btn"
      />
    </Button>
  );
};

export default ButtonFavoriteRecipe;

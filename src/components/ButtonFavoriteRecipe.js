import React, { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

const ButtonFavoriteRecipe = ({ recipe }) => {
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
    <Button onClick={ favoriteRecipe }>
      <img
        src={ favoritedIcon }
        alt="favorite recipe"
        data-testid="favorite-btn"
      />
    </Button>
  );
};

ButtonFavoriteRecipe.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ButtonFavoriteRecipe;

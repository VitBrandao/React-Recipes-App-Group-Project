import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import RecipeDetailContext from '../contexts/RecipeDetailContext';

const ButtonStartRecipe = () => {
  const { id } = useParams();
  const history = useHistory();
  const { pathname } = useLocation();
  const { recipeObject: { type } } = useContext(RecipeDetailContext);
  const recipeType = type === 'food' ? 'meals' : 'cocktails';
  const recipesInProgress = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
  const recipesInProgressByType = recipesInProgress?.[recipeType];
  let textButton = 'Start';
  if (recipesInProgressByType) {
    const inProgress = Object.keys(recipesInProgressByType).some(
      (idRecipe) => idRecipe === id,
    );
    if (inProgress) textButton = 'Continue';
  }

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];

  const recipeDone = doneRecipes.some(({ id: idRecipe }) => id === idRecipe);
  if (recipeDone) return null;

  return (
    <Button
      position="fixed"
      bottom="0"
      data-testid="start-recipe-btn"
      width="full"
      colorScheme="green"
      borderRadius="0"
      onClick={ () => history.push(`${pathname}/in-progress`) }
    >
      { `${textButton} Recipe` }
    </Button>
  );
};

export default ButtonStartRecipe;

import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import RecipeDetailContext from '../contexts/RecipeDetailContext';

const ButtonFinishRecipe = () => {
  const { recipeDone, recipeObject } = useContext(RecipeDetailContext);
  const history = useHistory();
  console.log(recipeObject);
  return (
    <Button
      data-testid="finish-recipe-btn"
      disabled={ !recipeDone }
      onClick={ () => {
        const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
        if (!doneRecipes.some(({ id }) => recipeObject.id === id)) {
          localStorage.setItem(
            'doneRecipes', JSON.stringify([...doneRecipes, recipeObject]),
          );
        }
        history.push('/done-recipes');
      } }
    >
      Finalizar Receita
    </Button>
  );
};

export default ButtonFinishRecipe;

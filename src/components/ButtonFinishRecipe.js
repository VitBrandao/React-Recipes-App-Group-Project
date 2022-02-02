import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import RecipeDetailContext from '../contexts/RecipeDetailContext';

const ButtonFinishRecipe = () => {
  const { recipeDone } = useContext(RecipeDetailContext);
  return (
    <Button
      data-testid="finish-recipe-btn"
      disabled={ !recipeDone }
    >
      Finalizar Receita
    </Button>
  );
};

export default ButtonFinishRecipe;

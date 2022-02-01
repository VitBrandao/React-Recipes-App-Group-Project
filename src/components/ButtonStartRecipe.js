import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';
import { useHistory, useLocation } from 'react-router-dom';

const ButtonStartRecipe = ({ id, recipeType }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const recipesInProgress = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
  const recipesInProgressByType = recipesInProgress?.[recipeType];
  let textButton = 'Start';
  if (recipesInProgressByType) {
    const inProgress = Object.keys(recipesInProgressByType).some(
      (idRecipe) => idRecipe === id,
    );
    if (inProgress) textButton = 'Continue';
  }

  console.log(global.location.href);

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

ButtonStartRecipe.propTypes = {
  id: PropTypes.string.isRequired,
  recipeType: PropTypes.string.isRequired,
};

export default ButtonStartRecipe;

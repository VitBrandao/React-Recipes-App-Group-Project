import React from 'react';
import { ListItem, OrderedList } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const IngredientsList = ({ currentRecipe }) => {
  const ingredients = [];
  const MAX_NUMBER_INGREDIENTS = 20;
  for (let i = 1; i <= MAX_NUMBER_INGREDIENTS; i += 1) {
    const currIngredient = `strIngredient${i}`;
    const currMeasure = `strMeasure${i}`;
    if (currentRecipe?.[currIngredient]) {
      const ingredientAndMeasure = (
        `${currentRecipe?.[currIngredient]} - ${currentRecipe?.[currMeasure] || ''}`
      );
      ingredients.push(ingredientAndMeasure);
    }
  }

  return (
    <OrderedList m="4">
      {
        ingredients.map((ingredient, index) => (
          <ListItem
            marginLeft="8"
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { ingredient }
          </ListItem>
        ))
      }
    </OrderedList>
  );
};

IngredientsList.propTypes = {
  currentRecipe: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default IngredientsList;

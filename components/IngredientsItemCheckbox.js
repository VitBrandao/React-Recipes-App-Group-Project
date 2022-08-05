import { Flex, ListItem, Text } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

const IngredientsItemCheckbox = ({
  index, ingredient, saveProgressRecipe, checkedIngredient,
}) => {
  const handleCheckbox = () => {
    if (!checkedIngredient) {
      saveProgressRecipe(index);
    }
  };

  const lineDecoration = checkedIngredient ? 'line-through' : 'none';

  return (
    <ListItem
      m="2"
      key={ index }
      data-testid={ `${index}-ingredient-step` }
      listStyleType="none"
    >
      <Flex alignContent="center">
        <input
          type="checkbox"
          checked={ checkedIngredient }
          onChange={ handleCheckbox }
          style={ { textDecoration: 'none solid rgb(0, 0, 0)' } }
        />
        <Text decoration={ lineDecoration }>
          { ingredient }
        </Text>
      </Flex>
    </ListItem>
  );
};

IngredientsItemCheckbox.propTypes = {
  index: PropTypes.number.isRequired,
  ingredient: PropTypes.string.isRequired,
  saveProgressRecipe: PropTypes.func.isRequired,
  checkedIngredient: PropTypes.bool.isRequired,
};

export default IngredientsItemCheckbox;

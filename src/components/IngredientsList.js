import React, { useContext } from 'react';
import { ListItem, OrderedList, Skeleton, Text } from '@chakra-ui/react';
import RecipeDetailContext from '../contexts/RecipeDetailContext';

const IngredientsList = () => {
  const { currentRecipe } = useContext(RecipeDetailContext);
  const ingredients = [];
  const MAX_NUMBER_INGREDIENTS = 20;
  for (let i = 1; i <= MAX_NUMBER_INGREDIENTS; i += 1) {
    const currIngredient = `strIngredient${i}`;
    const currMeasure = `strMeasure${i}`;
    if (currentRecipe?.[currIngredient]) {
      let ingredientAndMeasure = (
        `${currentRecipe?.[currIngredient]}`
      );
      if (currentRecipe?.[currMeasure]) {
        ingredientAndMeasure += ` - ${currentRecipe?.[currMeasure]}`;
      }
      ingredients.push(ingredientAndMeasure);
    }
  }

  if (ingredients.length === 0) {
    return (
      <OrderedList
        m="4"
        border="1px solid black"
        borderRadius="8px"
        p="4"
        paddingLeft="6"
      >
        <Text
          textAlign="center"
          fontSize="lg"
          marginBottom="4"
        >
          Lista de Ingredientes:
        </Text>
        <ListItem m="2" marginLeft="4"><Skeleton>Item</Skeleton></ListItem>
        <ListItem m="2" marginLeft="4"><Skeleton>Item</Skeleton></ListItem>
        <ListItem m="2" marginLeft="4"><Skeleton>Item</Skeleton></ListItem>
        <ListItem m="2" marginLeft="4"><Skeleton>Item</Skeleton></ListItem>
        <ListItem m="2" marginLeft="4"><Skeleton>Item</Skeleton></ListItem>
        <ListItem m="2" marginLeft="4"><Skeleton>Item</Skeleton></ListItem>
        <ListItem m="2" marginLeft="4"><Skeleton>Item</Skeleton></ListItem>
        <ListItem m="2" marginLeft="4"><Skeleton>Item</Skeleton></ListItem>
        <ListItem m="2" marginLeft="4"><Skeleton>Item</Skeleton></ListItem>
        <ListItem m="2" marginLeft="4"><Skeleton>Item</Skeleton></ListItem>
      </OrderedList>
    );
  }

  return (
    <OrderedList
      m="4"
      border="1px solid black"
      borderRadius="8px"
      p="4"
      paddingLeft="6"
    >
      <Text
        textAlign="center"
        fontSize="lg"
        marginBottom="4"
      >
        Lista de Ingredientes:
      </Text>
      {
        ingredients.map((ingredient, index) => (
          <ListItem
            m="2"
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

export default IngredientsList;

import React, { useContext, useState } from 'react';
import { ListItem, OrderedList, Skeleton, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import RecipeDetailContext from '../contexts/RecipeDetailContext';
import IngredientsItemCheckbox from './IngredientsItemCheckbox';

const IngredientsListCheckbox = () => {
  const { id } = useParams();
  const { currentRecipe, recipeObject: { type } } = useContext(RecipeDetailContext);
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
  const recipeType = type === 'food' ? 'meals' : 'cocktails';
  const [ingredientsChecked, setIngredientsChecked] = useState(
    inProgressRecipes?.[recipeType]?.[id] || [],
  );
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

  const saveProgressRecipe = (ingredientIndex) => {
    setIngredientsChecked([...ingredientsChecked, ingredientIndex], console.log('aeow'));
    if (inProgressRecipes?.[recipeType]?.[id]) {
      inProgressRecipes[recipeType][id] = (
        [...ingredientsChecked, ingredientIndex]
      );
    } else {
      const newRecipe = { [id]: [ingredientIndex] };
      inProgressRecipes[recipeType] = newRecipe;
    }

    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  };

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
          <IngredientsItemCheckbox
            ingredient={ ingredient }
            key={ index }
            index={ index }
            saveProgressRecipe={ saveProgressRecipe }
            checkedIngredient={
              ingredientsChecked.some((ingIndex) => ingIndex === index)
            }
          />
        ))
      }
    </OrderedList>
  );
};

export default IngredientsListCheckbox;

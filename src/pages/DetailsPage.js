import {
  Badge,
  Button,
  Container,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Recomendations from '../components/Recomendations';
import defaultApi from '../services';

const types = {
  meals: {
    defaultEndPoint: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    selectedEndPoint: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=',
    categoriesEndPoint: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
    thumbType: 'strMealThumb',
    nameType: 'strMeal',
    idType: 'idMeal',
    pathName: 'foods',
    title: 'Foods',
  },
  drinks: {
    defaultEndPoint: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    selectedEndPoint: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=',
    categoriesEndPoint: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
    thumbType: 'strDrinkThumb',
    nameType: 'strDrink',
    idType: 'idDrink',
    pathName: 'drinks',
    title: 'Drinks',
  },
};

const DetailsPage = () => {
  const [currentRecipe, setCurrentRecipe] = useState({});
  const { pathname } = useLocation();
  const { id } = useParams();
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  const recipeType = (
    pathname.split('/')[1] === 'foods' ? 'meals' : 'drinks'
  );
  const doneRecipe = doneRecipes.some(({ id: idRecipe }) => id === idRecipe);

  useEffect(() => {
    let URL;
    if (recipeType === 'meals') {
      URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    } else {
      URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    }
    defaultApi(URL)
      .then((response) => setCurrentRecipe(response[recipeType][0]));
  }, []);

  const ingredients = [];
  const MAX_NUMBER_INGREDIENTS = 20;

  for (let i = 1; i <= MAX_NUMBER_INGREDIENTS; i += 1) {
    const currIngredient = `strIngredient${i}`;
    const currMeasure = `strMeasure${i}`;
    if (currentRecipe?.[currIngredient]) {
      const ingredientAndMeasure = (
        `${currentRecipe?.[currIngredient]} - ${currentRecipe?.[currMeasure]}`
      );
      ingredients.push(ingredientAndMeasure);
    }
  }

  return (
    <Container overflow="hidden" maxW="full" p="0">
      <Image
        src={ currentRecipe?.[types[recipeType].thumbType] }
        data-testid="recipe-photo"
        maxH="35vh"
        width="full"
      />
      <Heading m="2">
        <Text data-testid="recipe-title">
          { currentRecipe?.[types[recipeType].nameType] }
        </Text>
        <Badge
          data-testid="recipe-category"
          marginLeft="2"
          colorScheme="blue"
          p="1"
        >
          { currentRecipe?.strCategory }
        </Badge>
        { recipeType === 'drinks' && currentRecipe?.strAlcoholic && (
          <Badge
            colorScheme="blue"
            data-testid="recipe-category"
            m="2"
            p="1"
          >
            { currentRecipe.strAlcoholic }
          </Badge>
        ) }
      </Heading>
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
      <Button data-testid="share-btn" />
      <Button data-testid="favorite-btn" />
      <Text data-testid="instructions">{ currentRecipe?.strInstructions }</Text>
      <Text>Recomendações:</Text>
      <Recomendations />
      {
        recipeType === 'meals' && currentRecipe.strYoutube && (
          <iframe
            title="Video da receita"
            data-testid="video"
            src={
              `https://www.youtube.com/embed/${currentRecipe?.strYoutube.split('v=')[1]}`
            }
            allowFullScreen
          />
        )
      }
      {
        !doneRecipe && (
          <Button
            position="fixed"
            bottom="0"
            data-testid="start-recipe-btn"
            width="full"
            colorScheme="green"
            borderRadius="0"
          >
            Start Recipe
          </Button>
        )
      }
    </Container>
  );
};

export default DetailsPage;

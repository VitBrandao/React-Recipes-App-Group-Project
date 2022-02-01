import {
  Badge,
  Button,
  Container,
  Heading,
  Image,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import copy from 'clipboard-copy';
import ButtonStartRecipe from '../components/ButtonStartRecipe';
import Recomendations from '../components/Recomendations';
import defaultApi from '../services';
import shareIcon from '../images/shareIcon.svg';
import ButtonFavoriteRecipe from '../components/ButtonFavoriteRecipe';
import IngredientsList from '../components/IngredientsList';

const types = {
  meals: {
    thumbType: 'strMealThumb',
    nameType: 'strMeal',
    idType: 'idMeal',
    pathName: 'foods',
    title: 'Foods',
  },
  drinks: {
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
  const toastLink = useToast({
    title: 'Link copied!',
    status: 'success',
    description: 'Link copiado com sucesso!',
    duration: 3000,
    isClosable: true,
  });

  useEffect(() => {
    let URL;
    if (recipeType === 'meals') {
      URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    } else {
      URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    }
    defaultApi(URL)
      .then((response) => setCurrentRecipe(response[recipeType][0]));
  }, [id, recipeType]);

  const handleShareButton = () => {
    copy(global.location.href)
      .then(() => toastLink());
  };

  const currentRecipeName = currentRecipe?.[types[recipeType].nameType];
  const currentRecipeImage = currentRecipe?.[types[recipeType].thumbType];

  const recipeObject = {
    id,
    type: recipeType === 'meals' ? 'food' : 'drink',
    nationality: currentRecipe?.strArea || '',
    category: currentRecipe?.strCategory ? currentRecipe.strCategory : '',
    alcoholicOrNot: currentRecipe?.strAlcoholic ? currentRecipe?.strAlcoholic : '',
    name: currentRecipeName || '',
    image: currentRecipeImage || '',
  };

  return (
    <Container overflow="hidden" maxW="full" p="0">
      <Image
        src={ currentRecipeImage }
        data-testid="recipe-photo"
        maxH="35vh"
        width="full"
      />
      <Heading m="2">
        <Text data-testid="recipe-title">
          { currentRecipeName }
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
      <IngredientsList currentRecipe={ currentRecipe } />
      <Button data-testid="share-btn" onClick={ handleShareButton }>
        <img src={ shareIcon } alt="share recipe" />
      </Button>
      <ButtonFavoriteRecipe recipe={ recipeObject } />
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
          <ButtonStartRecipe
            recipeType={ recipeType === 'drinks' ? 'cocktails' : 'meals' }
            id={ id }
          />
        )
      }
    </Container>
  );
};

export default DetailsPage;

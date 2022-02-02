import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router-dom';
import RecipeDetailContext from './RecipeDetailContext';
import defaultApi from '../services';

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

const RecipeDetailProvider = ({ children }) => {
  const [currentRecipe, setCurrentRecipe] = useState({});
  const { pathname } = useLocation();
  const { id } = useParams();
  const recipeType = (
    pathname.split('/')[1] === 'foods' ? 'meals' : 'drinks'
  );
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

  const currentRecipeName = currentRecipe?.[types[recipeType].nameType];
  const currentRecipeImage = currentRecipe?.[types[recipeType].thumbType];

  const recipeObject = {
    id,
    type: recipeType === 'meals' ? 'food' : 'drink',
    nationality: currentRecipe?.strArea || '',
    category: currentRecipe?.strCategory || '',
    alcoholicOrNot: currentRecipe?.strAlcoholic || '',
    name: currentRecipeName || '',
    image: currentRecipeImage || '',
  };

  return (
    <RecipeDetailContext.Provider value={ { recipeObject, currentRecipe } }>
      { children }
    </RecipeDetailContext.Provider>
  );
};

RecipeDetailProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipeDetailProvider;

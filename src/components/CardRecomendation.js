import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

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

const CardRecomendation = ({ recomendation, index, recipeType }) => (
  <Flex
    data-testid={ `${index}-recomendation-card` }
    width="55vw"
    height="20vh"
    flexDir="column"
    justifyContent="center"
    textAlign="center"
    p="4"
  >
    <Image
      src={ recomendation[types[recipeType].thumbType] }
      height="90%"
    />
    <Text data-testid={ `${index}-recomendation-title` }>
      { recomendation[types[recipeType].nameType] }
    </Text>
  </Flex>
);

CardRecomendation.propTypes = {
  recomendation: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
  recipeType: PropTypes.string.isRequired,
};

export default CardRecomendation;

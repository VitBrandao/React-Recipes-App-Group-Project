import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import defaultApi from '../services';
import CardRecomendation from './CardRecomendation';
import Carousel from './Carousel';

const Recomendations = () => {
  const [recomendations, setRecomendations] = useState([]);
  const { pathname } = useLocation();
  const recipeType = (
    pathname.split('/')[1] === 'foods' ? 'drinks' : 'meals'
  );
  useEffect(() => {
    let URL;
    if (recipeType === 'drinks') {
      URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    } else {
      URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    }
    defaultApi(URL)
      .then((response) => setRecomendations(response[recipeType]));
  }, [recipeType]);

  const SIX = 6;
  const firstSixRecomendations = recomendations.filter((_item, i) => i < SIX);
  console.log(firstSixRecomendations);

  return (
    <Carousel>
      {
        firstSixRecomendations.map((recomendation, index) => (
          <CardRecomendation
            key={ index }
            index={ index }
            recomendation={ recomendation }
            recipeType={ recipeType }
          />
        ))
      }
    </Carousel>
  );
};

export default Recomendations;

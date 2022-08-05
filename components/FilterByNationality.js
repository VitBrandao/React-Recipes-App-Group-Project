import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Cards from './Cards';
import defaultApi from '../services';

function FilterByNationality({ dropdownValue, history }) {
  // Estado para guardar retorno do fetch
  const [foodsByNationality, setFoodsByNationality] = useState([]);

  // Garantindo que, no máximo, 12 cards serão renderizados
  const reduceArray = (array) => {
    const finalArray = [];
    const magicNumber = 12;
    for (let index = 0; index < magicNumber; index += 1) {
      finalArray.push(array[index]);
    }
    return finalArray;
  };

  // componentDidMount e componentDidUpdate
  useEffect(() => {
    const fetchByNationality = async () => {
      const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${dropdownValue}`;
      const findNationFoods = await defaultApi(URL);
      const lengthLimit = 12;
      const finalObject = findNationFoods.meals.length > lengthLimit ? (
        reduceArray(findNationFoods.meals)
      ) : (
        findNationFoods.meals
      );
      setFoodsByNationality(finalObject);
    };
    fetchByNationality();
  }, [setFoodsByNationality, dropdownValue]);

  return (
    <div>
      {
        foodsByNationality.length === 0 ? (
          <span> Loading... </span>
        ) : (
          foodsByNationality.map((food, index) => (
            <Cards
              key={ food.strMeal }
              img={ food.strMealThumb }
              name={ food.strMeal }
              index={ index }
              onClick={ () => history.push(`/foods/${food.idMeal}`) }
            />
          )))
      }
    </div>
  );
}

FilterByNationality.propTypes = {
  dropdownValue: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default FilterByNationality;

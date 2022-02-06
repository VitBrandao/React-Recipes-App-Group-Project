import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Cards from './Cards';
import defaultApi from '../services';

function FilterByNationality({ dropdownValue, history }) {
  // Estado para guardar retorno do fetch
  const [foodsByNationality, setFoodsByNationality] = useState([]);

  // Função do fetch
  const fetchByNationality = async () => {
    const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${dropdownValue}`;
    const findNationFoods = await defaultApi(URL);
    setFoodsByNationality(findNationFoods);
  };

  // componentDidMount
  useEffect(() => { fetchByNationality(); }, [setFoodsByNationality]);

  return (
    <div>
      {
        foodsByNationality.length === 0 ? (
          null
        ) : (
          foodsByNationality.meals.map((food, index) => (
            <Cards
              key={ food.strMeal }
              img={ food.strMealThumb }
              name={ food.strMeal }
              index={ index }
              onClick={ () => history.push(`/foods/${meal.idMeal}`) }
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

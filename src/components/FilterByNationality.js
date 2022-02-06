import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Cards from './Cards';
import defaultApi from '../services';

function FilterByNationality({ dropdownValue, history }) {
  // Estado para guardar retorno do fetch
  const [foodsByNationality, setFoodsByNationality] = useState([]);

  const reduceArray = (array) => {
    console.log('chegou');
    const finalArray = [];
    const magicNumber = 12;
    for (let index = 0; index < magicNumber; index += 1) {
      finalArray.push(array.meals[index]);
    }

    return finalArray;
  };

  // Função do fetch
  const fetchByNationality = async () => {
    const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${dropdownValue}`;
    const findNationFoods = await defaultApi(URL);

    const lengthLimit = 12;
    const finalObject = findNationFoods.length > lengthLimit ? (
      reduceArray(findNationFoods)
    ) : (
      findNationFoods
    );
    console.log(finalObject);
    setFoodsByNationality(finalObject);
  };

  // componentDidMount
  useEffect(() => { fetchByNationality(); }, []);

  // componentDidUpdate (necessário para quando o usuário troca de uma nacionalidade para outra no dropdown)
  useEffect(() => { fetchByNationality(); });

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

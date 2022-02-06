import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import defaultApi from '../services';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreFoodsNationalitiesPage({ history }) {
  // Estado para fetch geral
  const [mealsList, setMealsList] = useState([]);
  const firstMeals = [];

  // Estado para nacionalidades
  const [nationsList, setNationsList] = useState([]);
  const nationsByName = [];

  // Função do fetch geral
  const fetchMealsList = async () => {
    const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const apiMealsList = await defaultApi(URL);
    setMealsList(apiMealsList);
  };

  // Função do fetch para nacionalidades
  const fetchNations = async () => {
    const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
    const apiNationsList = await defaultApi(URL);
    setNationsList(apiNationsList);
  };

  // didMount - fetch geral
  useEffect(() => { fetchMealsList(); }, [setMealsList]);

  // didMount - nacionalidades
  useEffect(() => { fetchNations(); }, [setNationsList]);

  // Criando array do dropdown de nacionalidades
  const createDropdownList = (list) => {
    nationsByName.push('All');
    list.meals.map((nation) => nationsByName.push(nation.strArea));
  };

  // Criando lista de exibição inicial de receitas
  const createInitialList = (list) => {
    const limit = 11;
    for (let index = 0; index <= limit; index += 1) {
      firstMeals.push(list.meals[index]);
    }
  };

  // Estado e onChange para capturar valor do dropdown
  const [dropdownValue, setDropdownValue] = useState('All');
  const handleDropdownChange = ({ target }) => {
    setDropdownValue(target.value);
  };

  // Função de filtragem de acordo com dropdown
  const filterMealList = (list) => {
    if (list.length === 0) {
      return null;
    }

    const filterList = list.meals.filter((meal) => (
      meal.strArea.includes(dropdownValue)
    ));

    return filterList.map((meal, index) => (
      <Cards
        img={ meal.strMealThumb }
        name={ meal.strMeal }
        key={ meal }
        index={ index }
        onClick={ () => history.push(`/foods/${meal.idMeal}`) }
      />
    ));
  };

  // Fetch final - para URL de nacionalidades
  // const findNationalFoods = async () => {
  //   const URL = `www.themealdb.com/api/json/v1/1/filter.php?a=${dropdownValue}`;
  //   const findNationFoods = await defaultApi(URL);
  //   filterMealList(findNationFoods.meals);
  // };

  return (
    <div>
      <Header showSearchButton />
      <h1 data-testid="page-title">Explore Nationalities</h1>

      { // Montando array para o dropdown
        nationsList.length === 0 ? (
          null
        ) : (
          createDropdownList(nationsList)
        )
      }

      { // DROPDOWN
        nationsByName.length === 0 ? (
          null
        ) : (
          <select
            data-testid="explore-by-nationality-dropdown"
            onChange={ handleDropdownChange }
          >
            {nationsByName.map((nation) => (
              <option
                value={ nation }
                key={ nation }
                data-testid={ `${nation}-option` }
              >
                {nation}
              </option>
            ))}
          </select>
        )
      }

      { // Criando lista inicial de receitas com 12 itens
        mealsList.length === 0 ? (
          null
        ) : (
          createInitialList(mealsList)
        )
      }

      { // LISTA DE RECEITAS - CARDS
        firstMeals.length !== 0 && dropdownValue === 'All' ? (
          <div>
            {
              firstMeals.map((meal, index) => (
                <Cards
                  img={ meal.strMealThumb }
                  name={ meal.strMeal }
                  key={ meal.idMeal }
                  index={ index }
                  onClick={ () => history.push(`/foods/${meal.idMeal}`) }
                />
              ))
            }
          </div>
        ) : (
          <div>
            { filterMealList(mealsList) }
          </div>
        )
      }
      <Footer />
    </div>
  );
}

ExploreFoodsNationalitiesPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default ExploreFoodsNationalitiesPage;

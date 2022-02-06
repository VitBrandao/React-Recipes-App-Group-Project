import React, { useEffect, useState } from 'react';
import defaultApi from '../services';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreFoodsNationalitiesPage() {
  // Estado para fetch geral
  const [mealsList, setMealsList] = useState([]);

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

  return (
    <div>
      <Header showSearchButton />
      <h1 data-testid="page-title">Explore Nationalities</h1>

      { // Montando array para o dropdown
        nationsList.length === 0 ? (
          null
        ) : (
          createDropdownList(nationsList)
          // console.log(nationsList.meals[0])
        )
      }

      { // DROPDOWN
        nationsByName.length === 0 ? (
          null
        ) : (
          <select data-testid="explore-by-nationality-dropdown">
            {nationsByName.map((nation) => (
              <option
                value={ nation }
                key={ nation }
                data-testid={ `${nation}-option` }
              >
                { nation }
              </option>
            ))}
          </select>
        )
      }
      {mealsList.length === 0 ? null : console.log(mealsList)}
      <Footer />
    </div>
  );
}

export default ExploreFoodsNationalitiesPage;

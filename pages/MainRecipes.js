import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Cards from '../components/Cards';
import defaultApi from '../services/index';
import Header from '../components/Header';
import RecipesContext from '../contexts/RecipesContext';
import Footer from '../components/Footer';

const types = {
  meals: {
    defaultEndPoint: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    selectedEndPoint: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=',
    categoriesEndPoint: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
    searchEndPoint: (search) => `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`,
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
    searchEndPoint: (search) => `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`,
    thumbType: 'strDrinkThumb',
    nameType: 'strDrink',
    idType: 'idDrink',
    pathName: 'drinks',
    title: 'Drinks',
  },
};

function notFoundAlert() {
  global.alert('Sorry, we haven\'t found any recipes for these filters.');
}

function createCards(list, currType, push, searchURL) {
  const { thumbType, nameType, idType, pathName } = currType;
  if (list.length === 1 && searchURL !== '') push(`/${pathName}/${list[0][idType]}`);
  return list.map(({ [thumbType]: img, [nameType]: name, [idType]: id }, index) => (
    <Cards
      img={ img }
      name={ name }
      key={ name + id }
      index={ index }
      onClick={ () => push(`/${pathName}/${id}`) }
    />
  ));
}
function MainRecipes({ location: { pathname }, history: { push } }) {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currCategory, setCurrCategory] = useState('');
  const currResult = pathname.endsWith('foods') ? 'meals' : 'drinks';
  const currType = types[currResult];
  const { searchURL } = useContext(RecipesContext);
  const { search } = useLocation();

  useEffect(() => {
    const categoryLenght = 5;
    const { categoriesEndPoint } = currType;

    defaultApi(categoriesEndPoint)
      .then(({ [currResult]: array }) => setCategories(array.slice(0, categoryLenght)))
      .catch((e) => e);
  }, [currType, currResult]);

  const colocarReceitas = (receitas) => {
    const novasReceitas = receitas.filter((receita) => receita?.idMeal !== '53039');
    setRecipes(novasReceitas);
  };

  useEffect(() => {
    const currSearch = search?.slice(1);
    const optionsLength = 12;
    const { defaultEndPoint, selectedEndPoint, searchEndPoint } = currType;
    let URL;
    if (currSearch) {
      URL = searchEndPoint(currSearch);
    } else if (searchURL !== '') URL = searchURL;
    else URL = currCategory ? `${selectedEndPoint}${currCategory}` : defaultEndPoint;

    fetch(URL)
      .then((response) => response.json())
      .then(({ [currResult]: array }) => (array === null ? notFoundAlert()
        : colocarReceitas(array.slice(0, optionsLength))))
      .catch((e) => e);
  }, [currType, currCategory, currResult, searchURL, search]);

  function createCategories(list) {
    const newList = [{ strCategory: 'All' }, ...list];
    return newList.map(({ strCategory: category }) => {
      const useCategory = (
        category === currCategory || category === 'All') ? '' : category;

      return (
        <input
          type="button"
          key={ category }
          value={ category }
          data-testid={ `${category}-category-filter` }
          onClick={ () => setCurrCategory(useCategory) }
        />
      );
    });
  }

  const { title } = currType;
  return (
    <div>
      <Header showSearchButton />
      <div>
        <h1 data-testid="page-title">{title}</h1>
        <div>
          {createCategories(categories)}
        </div>
        <div>
          {createCards(recipes, currType, push, searchURL)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

MainRecipes.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default MainRecipes;

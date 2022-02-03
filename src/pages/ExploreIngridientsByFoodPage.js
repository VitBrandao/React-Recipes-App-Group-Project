import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import defaultApi from '../services';

function ExploreIngridientsByFoodPage() {
  const [ingredientsList, setIngredientsList] = useState([]);

  const fetchIngredients = async () => {
    const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
    const findIngredients = await defaultApi(URL);
    return setIngredientsList(findIngredients);
  };

  // componentDidMount
  useEffect(() => { fetchIngredients(); }, []);

  // Construindo array com nome dos 12 primeiros ingredientes
  const ingredientsByName = [];
  const createIngredientsList = () => {
    const lenghtLimit = 11;
    for (let index = 0; index <= lenghtLimit; index += 1) {
      ingredientsByName.push(ingredientsList.meals[index].strIngredient);
    }
  };

  return (
    <div>
      <Header showSearchButton={ false } />
      <h1 data-testid="page-title">Explore Ingredients</h1>

      {ingredientsList.length === 0 ? (
        'null'
      ) : (
        createIngredientsList()
      )}

      <div>
        {ingredientsByName.map((ingredient, index) => (
          <div key={ ingredient } data-testid={ `${index}-ingredient-card` }>
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png` }
              alt={ ingredient }
            />
            <p data-testid={ `${index}-card-name` }>
              {ingredient}
            </p>
          </div>))}
      </div>

      <Footer />
    </div>
  );
}

export default ExploreIngridientsByFoodPage;

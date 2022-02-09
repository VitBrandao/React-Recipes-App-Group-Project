import React, { useEffect, useState } from 'react';
import defaultApi from '../services';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreIngridientsByDrinkPage() {
  const [ingredientsList, setIngredientsList] = useState([]);

  const fetchIngredients = async () => {
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
    const findIngredients = await defaultApi(URL);
    setIngredientsList(findIngredients);
  };

  // componentDidMount
  useEffect(() => { fetchIngredients(); }, [setIngredientsList]);

  // Construindo array com nome dos 12 primeiros ingredientes
  const ingredientsByName = [];
  const createIngredientsList = () => {
    const lenghtLimit = 11;
    for (let index = 0; index <= lenghtLimit; index += 1) {
      ingredientsByName.push(ingredientsList.drinks[index].strIngredient1);
    }
  };

  return (
    <div>
      <Header showSearchButton={ false } />
      <h1 data-testid="page-title">Explore Ingredients</h1>

      {ingredientsList.length === 0 ? (
        null
      ) : (
        createIngredientsList()
      )}

      <div>
        {ingredientsByName.map((ingredient, index) => (
          <div key={ ingredient } data-testid={ `${index}-ingredient-card` }>
            <a
              href={ `/drinks?${ingredient}` }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png` }
                alt={ ingredient }
              />
              <p data-testid={ `${index}-card-name` }>
                {ingredient}
              </p>
            </a>
          </div>))}
      </div>

      <Footer />
    </div>
  );
}

export default ExploreIngridientsByDrinkPage;

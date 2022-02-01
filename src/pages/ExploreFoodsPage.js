import React from 'react';
import PropTypes from 'prop-types';
import defaultApi from '../services/index';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreFoodsPage({ history }) {
  const findRandomPage = async () => {
    const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const findRandomFood = await defaultApi(URL);
    const randomFoodId = findRandomFood.meals[0].idMeal;

    history.push(`/foods/${randomFoodId}`);
  };

  return (
    <div>
      <Header showSearchButton={ false } />
      <h1 data-testid="page-title">Explore Foods</h1>

      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/foods/ingredients') }
      >
        By Ingredient
      </button>

      <button
        type="button"
        data-testid="explore-by-nationality"
        onClick={ () => history.push('/explore/foods/nationalities') }
      >
        By Nationality
      </button>

      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ findRandomPage }
      >
        Surprise me!
      </button>

      <Footer />
    </div>
  );
}

ExploreFoodsPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default ExploreFoodsPage;

import React from 'react';
import PropTypes from 'prop-types';
import defaultApi from '../services/index';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreDrinksPage({ history }) {
  const findRandomPage = async () => {
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const findRandomDrink = await defaultApi(URL);
    const randomDrinkId = findRandomDrink.drinks[0].idDrink;

    history.push(`/drinks/${randomDrinkId}`);
  };

  return (
    <div>
      <Header showSearchButton={ false } />
      <h1 data-testid="page-title">Explore Drinks</h1>

      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/drinks/ingredients') }
      >
        By Ingredient
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

ExploreDrinksPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default ExploreDrinksPage;

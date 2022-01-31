import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ExploreDrinksPage = ({ history }) => (
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
    >
      Surprise me!
    </button>

    <Footer />
  </div>
);

ExploreDrinksPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default ExploreDrinksPage;

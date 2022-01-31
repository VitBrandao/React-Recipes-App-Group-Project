import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ExploreFoodsPage = ({ history }) => (
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
    >
      Surprise me!
    </button>

    <Footer />
  </div>
);

ExploreFoodsPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default ExploreFoodsPage;

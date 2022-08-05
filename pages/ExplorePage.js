import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ExplorePage = ({ history }) => (
  <div>
    <Header showSearchButton={ false } />
    <h1 data-testid="page-title">Explore</h1>

    <button
      type="button"
      data-testid="explore-foods"
      onClick={ () => history.push('/explore/foods') }
    >
      Explore Foods
    </button>

    <button
      type="button"
      data-testid="explore-drinks"
      onClick={ () => history.push('/explore/drinks') }
    >
      Explore Drinks
    </button>

    <Footer />
  </div>
);

ExplorePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default ExplorePage;

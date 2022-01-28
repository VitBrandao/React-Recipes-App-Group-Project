import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ExploreIngridientsByDrinkPage = () => (
  <div>
    <Header showSearchButton={ false } />
    <h1 data-testid="page-title">Explore Ingredients</h1>
    <Footer />
  </div>
);

export default ExploreIngridientsByDrinkPage;

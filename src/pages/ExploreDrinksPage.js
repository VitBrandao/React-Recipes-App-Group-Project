import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ExploreDrinksPage = () => (
  <div>
    <Header showSearchButton={ false } />
    <h1 data-testid="page-title">Explore Drinks</h1>
    <Footer />
  </div>
);

export default ExploreDrinksPage;

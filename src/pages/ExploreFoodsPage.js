import React from 'react';
import Header from '../components/Header';

const ExploreFoodsPage = () => (
  <div>
    <Header showSearchButton={ false } />
    <h1 data-testid="page-title">Explore Foods</h1>
  </div>
);

export default ExploreFoodsPage;

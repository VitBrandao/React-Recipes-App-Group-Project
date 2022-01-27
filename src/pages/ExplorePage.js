import React from 'react';
import Header from '../components/Header';

const ExplorePage = () => (
  <div>
    <Header showSearchButton={ false } />
    <h1 data-testid="page-title">Explore</h1>
  </div>
);

export default ExplorePage;

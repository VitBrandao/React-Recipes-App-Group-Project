import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ExplorePage = () => (
  <div>
    <Header showSearchButton={ false } />
    <h1 data-testid="page-title">Explore</h1>
    <Footer />
  </div>
);

export default ExplorePage;

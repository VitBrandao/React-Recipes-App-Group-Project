import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ProfilePage = () => (
  <div>
    <Header showSearchButton={ false } />
    <h1 data-testid="page-title">Profile</h1>
    <Footer />
  </div>
);

export default ProfilePage;

import React from 'react';
import Header from '../components/Header';

const ProfilePage = () => (
  <div>
    <Header showSearchButton={ false } />
    <h1 data-testid="page-title">Profile</h1>
  </div>
);

export default ProfilePage;

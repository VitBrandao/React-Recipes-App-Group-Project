import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ProfilePage = () => {
  const [userEmail, setUserEmail] = useState('');
  useEffect(() => {
    const email = JSON.parse(localStorage.getItem('user')) === null ? ''
      : JSON.parse(localStorage.getItem('user')).email;
    if (email === null) {
      return '';
    }
    setUserEmail(email);
  }, []);
  return (
    <div>
      <Header showSearchButton={ false } />
      <h1 data-testid="page-title">Profile</h1>
      <h2 data-testid="profile-email">{userEmail}</h2>
      <Link
        to="/done-recipes"
        type="button"
        data-testid="profile-done-btn"
      >
        Done Recipes
      </Link>
      <Link
        to="/favorite-recipes"
        type="button"
        data-testid="profile-favorite-btn"
      >
        Favorite Recipes
      </Link>
      <Link
        to="/"
        type="button"
        data-testid="profile-logout-btn"
        onClick={ () => localStorage.clear() }
      >
        Logout
      </Link>
      <Footer />
    </div>
  );
};
export default ProfilePage;

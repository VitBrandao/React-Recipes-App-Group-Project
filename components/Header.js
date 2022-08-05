import React, { useState } from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

export default function Header({ showSearchButton }) {
  const [showSearchInput, setShowSearchInput] = useState(false);
  return (
    <header>
      <div>
        <a
          href="/profile"
          data-testid="profile-top-btn"
          src={ profileIcon }
        >
          <img src={ profileIcon } alt="User button" />
        </a>
        <h1 data-testid="page-title">Foods</h1>
        { showSearchButton && (
          <button
            type="button"
            data-testid="search-top-btn"
            onClick={ () => setShowSearchInput(!showSearchInput) }
            src={ searchIcon }
          >
            <img src={ searchIcon } alt="" />
          </button>
        )}
      </div>
      {showSearchInput ? (
        <div>
          <SearchBar />
        </div>
      ) : null }
    </header>
  );
}

Header.propTypes = {
  showSearchButton: PropTypes.bool.isRequired,
};

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ showSearchButton }) {
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <div>
      <a
        href="/profile"
        data-testid="profile-top-btn"
        src={ profileIcon }
      >
        <img href="/profile" src={ profileIcon } alt="Profile Button" />
      </a>

      <h1 data-testid="page-title"> App De Receitas </h1>

      {showSearchButton && (
        <button
          type="button"
          data-testid="search-top-btn"
          onClick={ () => setShowSearchInput(!showSearchInput) }
          src={ searchIcon }
        >
          <img src={ searchIcon } alt="Search Button" />
        </button>
      )}
      {showSearchInput ? <SearchBar /> : null}
    </div>
  );
}

Header.propTypes = {
  showSearchButton: PropTypes.bool,
};

Header.defaultProps = {
  showSearchButton: true,
};

export default Header;

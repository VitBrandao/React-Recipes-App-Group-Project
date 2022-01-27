import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Header({ history }) {
  const redirectToProfilePage = () => (history.push('/profile'));
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <div>
      <button
        type="button"
        data-testid="profile-top-btn"
        onClick={ redirectToProfilePage }
      >
        Profile
      </button>

      <h1 data-testid="page-title"> App De Receitas </h1>

      <button
        type="button"
        data-testid="search-top-btn"
        onClick={ () => setShowSearchInput(!showSearchInput) }
      >
        Search
      </button>
      {showSearchInput ? <input data-testid="search-input" /> : null}
    </div>
  );
}

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Header;

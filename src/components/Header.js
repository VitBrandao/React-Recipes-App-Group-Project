import React from 'react';

function Header() {
  return (
    <div>
      <button type="button" data-testid="profile-top-btn"> Profile </button>
      <h1 data-testid="page-title"> App De Receitas </h1>
      <button type="button" data-testid="search-top-btn"> Search </button>
    </div>
  );
}

export default Header;

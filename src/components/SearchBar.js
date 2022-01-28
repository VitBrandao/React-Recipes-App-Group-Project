import React from 'react';

const SearchBar = () => (
  <div>
    <input
      type="search"
      data-testid="search-input"
      id="search-input"
      placeholder="Digite sua busca"
      value=""
    />
    <div>
      <label htmlFor="ingredients">
        Ingredientes
        <input
          id="ingredients"
          type="radio"
          data-testid="ingredient-search-radio"
        />
      </label>
      <label htmlFor="name-search">
        Nome
        <input
          id="name-search"
          type="radio"
          data-testid="name-search-radio"
        />
      </label>
      <label htmlFor="name-search">
        Primeira letra
        <input
          type="radio"
          data-testid="first-letter-search-radio"
        />
      </label>
    </div>
    <button
      type="submit"
      data-testid="exec-search-btn"
    >
      Pesquisar
    </button>
  </div>
);

export default SearchBar;

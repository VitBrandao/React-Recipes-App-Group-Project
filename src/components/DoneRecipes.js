import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

const DoneRecipes = () => {
  const [allDone, setAllDone] = useState([]);
  const resetFood = JSON.parse(localStorage.getItem('doneRecipes'));
  const history = useHistory();

  useEffect(() => {
    const allFoodIds = JSON.parse(localStorage.getItem('doneRecipes'));
    setAllDone(allFoodIds);
  }, []);

  const redirectToDetailedPage = (id, type) => {
    history.push(`/${type}s/${id}`);
  };

  const filterFunc = (typeTarget) => {
    const recipesByType = allDone.filter(({ type }) => typeTarget === type);
    setAllDone(recipesByType);
  };

  const handleClickFilter = ({ target }) => {
    switch (target.value) {
    case 'all':
      setAllDone(resetFood);
      break;
    case 'food':
      filterFunc('food');
      break;
    case 'drinks':
      filterFunc('drink');
      break;
    default:
      break;
    }
  };

  const [clipboard, setClipboard] = useState(false);

  const handleCopy = (type, id) => {
    const url = `http://localhost:3000/${type}s/${id}`;
    if (url) {
      copy(url);
      setClipboard(true);
    } else {
      const copyText = window.location.href;
      copy(copyText);
      setClipboard(true);
    }
  };

  /* const handleTags = (tags) => {
    if (typeof (tags) === 'string' && tags.length > 1) {
      <p
        data-testid={ `${index}-${tags}-horizontal-tag` }
        key={ tags }
      >
        {tags}
      </p>;
    } else if (tags.length === 0) {
      <p
        data-testid={ `${index}-${tags}-horizontal-tag` }
        key={ tags }
      />;
    } else {
      tags.map((eachTag, i) => (
        <p
          data-testid={ `${index}-${tags[i]}-horizontal-tag` }
          key={ eachTag }
        >
          { eachTag }
        </p>));
    }
  }; */
  return (
    <>
      <button
        type="button"
        onClick={ handleClickFilter }
        data-testid="filter-by-all-btn"
        value="all"
      >
        All
      </button>
      <button
        type="button"
        onClick={ handleClickFilter }
        data-testid="filter-by-food-btn"
        value="food"
      >
        Food
      </button>
      <button
        type="button"
        onClick={ handleClickFilter }
        data-testid="filter-by-drink-btn"
        value="drinks"
      >
        Drinks
      </button>
      {allDone && allDone
        .map(({ id,
          image,
          name,
          nationality,
          category,
          alcoholicOrNot,
          type,
          tags,
          doneDate,
        },
        index) => (
          <div key={ id }>
            <button
              onClick={ () => redirectToDetailedPage(id, type) }
              type="button"
            >
              <img
                src={ image }
                alt={ `${id} ex` }
                className="img-fluid"
                data-testid={ `${index}-horizontal-image` }
              />
            </button>
            <p data-testid={ `${index}-horizontal-top-text` }>
              { `${nationality} - ${category}`}
              { alcoholicOrNot }
            </p>
            <button
              onClick={ () => redirectToDetailedPage(id, type) }
              type="button"
            >
              <h3 data-testid={ `${index}-horizontal-name` }>
                { name }
              </h3>
            </button>
            <p data-testid={ `${index}-horizontal-done-date` }>
              {`Feita em: ${doneDate}`}
            </p>
            { tags && tags.map((eachTag, i) => (
              <p
                data-testid={ `${index}-${tags[i]}-horizontal-tag` }
                key={ eachTag }
              >
                { eachTag }
              </p>)) }
            <div>
              <button
                type="button"
                data-testid={ `${index}-horizontal-share-btn` }
                onClick={ () => handleCopy(type, id) }
                src={ shareIcon }
              >
                <img src={ shareIcon } alt="Share" />
              </button>
              {clipboard && <p>Link copied!</p> }
            </div>
          </div>))}
      ;
    </>
  );
};

export default DoneRecipes;

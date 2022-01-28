import React from 'react';
import PropTypes from 'prop-types';

function Cards({ img, name, index, onClick }) {
  return (
    <button
      type="button"
      data-testid={ `${index}-recipe-card` }
      onClick={ onClick }
    >
      <img
        src={ img }
        alt={ `a ${name}` }
        data-testid={ `${index}-card-img` }
      />
      <div data-testid={ `${index}-card-name` }>{name}</div>
    </button>
  );
}

Cards.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Cards;

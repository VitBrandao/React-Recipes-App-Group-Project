import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  const style = {
    position: 'fixed',
    bottom: '0',
  };

  return (
    <footer data-testid="footer" style={ style }>

      <Link
        to="/drinks"
        type="button"
        data-testid="drinks-bottom-btn"
        src={ drinkIcon }
      >
        <img src={ drinkIcon } alt="drinks-logo" />
      </Link>

      <Link
        to="/explore"
        type="button"
        data-testid="explore-bottom-btn"
        src={ exploreIcon }
      >
        <img src={ exploreIcon } alt="explore-logo" />
      </Link>

      <Link
        to="/foods"
        type="button"
        data-testid="food-bottom-btn"
        src={ mealIcon }
      >

        <img src={ mealIcon } alt="food-logo" />
      </Link>

    </footer>
  );
}

export default Footer;

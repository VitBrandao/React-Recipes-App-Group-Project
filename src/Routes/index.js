import React from 'react';
import { Route } from 'react-router-dom';
import DetailsPage from '../pages/DetailsPage';
import DoneRecipesPage from '../pages/DoneRecipesPage';
import ExploreDrinksPage from '../pages/ExploreDrinksPage';
import ExploreFoodsPage from '../pages/ExploreFoodsPage';
import ExploreFoodsNationalitiesPage from '../pages/ExploreFoodsNationalitiesPage';
import ExploreIngridientsByFoodPage from '../pages/ExploreIngridientsByFoodPage';
import ExploreIngridientsByDrinkPage from '../pages/ExploreIngridientsByDrinkPage';
import ExplorePage from '../pages/ExplorePage';
import FavoriteRecipes from '../pages/FavoriteRecipesPage';
import InProgressPage from '../pages/InProgressPage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import MainRecipes from '../pages/MainRecipes';

const Routes = () => (
  <div>
    <Route exact path="/" component={ LoginPage } />
    <Route exact path="/foods" component={ MainRecipes } />
    <Route exact path="/drinks" component={ MainRecipes } />
    <Route exact path="/foods/:id" component={ DetailsPage } />
    <Route exact path="/drinks/:id" component={ DetailsPage } />
    <Route exact path="/foods/:id/in-progress" component={ InProgressPage } />
    <Route exact path="/drinks/:id/in-progress" component={ InProgressPage } />
    <Route exact path="/done-recipes" component={ DoneRecipesPage } />
    <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
    <Route exact path="/explore" component={ ExplorePage } />
    <Route exact path="/explore/foods" component={ ExploreFoodsPage } />
    <Route exact path="/explore/drinks" component={ ExploreDrinksPage } />
    <Route
      exact
      path="/explore/foods/ingredients"
      component={ ExploreIngridientsByFoodPage }
    />
    <Route
      exact
      path="/explore/drinks/ingredients"
      component={ ExploreIngridientsByDrinkPage }
    />
    <Route
      exact
      path="/explore/foods/nationalities"
      component={ ExploreFoodsNationalitiesPage }
    />
    <Route exact path="/profile" component={ ProfilePage } />
  </div>
);

export default Routes;

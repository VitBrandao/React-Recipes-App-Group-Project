import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetailsPage from '../pages/DetailsPage';
import DoneRecipesPage from '../pages/DoneRecipesPage';
import DrinksPage from '../pages/DrinksPage';
import ExploreDrinksOrFoodsPage from '../pages/ExploreDrinksOrFoodsPage';
import ExploreFoodsNationalitiesPage from '../pages/ExploreFoodsNationalitiesPage';
import ExploreIngridientsPage from '../pages/ExploreIngredientsPage';
import ExplorePage from '../pages/ExplorePage';
import FavoriteRecipes from '../pages/FavoriteRecipesPage';
import FoodsPage from '../pages/FoodsPage';
import InProgressPage from '../pages/InProgressPage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ LoginPage } />
      <Route exact path="/foods" component={ FoodsPage } />
      <Route exact path="/drinks" component={ DrinksPage } />
      <Route exact path="/foods/:id" component={ DetailsPage } />
      <Route exact path="/drinks/:id" component={ DetailsPage } />
      <Route exact path="/foods/:id/in-progress" component={ InProgressPage } />
      <Route exact path="/drinks/:id/in-progress" component={ InProgressPage } />
      <Route exact path="/done-recipes" component={ DoneRecipesPage } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
      <Route exact path="/explore" component={ ExplorePage } />
      <Route exact path="/explore/foods" component={ ExploreDrinksOrFoodsPage } />
      <Route exact path="/explore/drinks" component={ ExploreDrinksOrFoodsPage } />
      <Route
        exact
        path="/explore/foods/ingredients"
        component={ ExploreIngridientsPage }
      />
      <Route
        exact
        path="/explore/drinks/ingredients"
        component={ ExploreIngridientsPage }
      />
      <Route
        exact
        path="/explore/foods/nationalities"
        component={ ExploreFoodsNationalitiesPage }
      />
      <Route exact path="/profile" component={ ProfilePage } />
    </Switch>
  </BrowserRouter>
);

export default Routes;

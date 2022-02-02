import React from 'react';
import { Container } from '@chakra-ui/react';
import ButtonStartRecipe from '../components/ButtonStartRecipe';
import Recomendations from '../components/Recomendations';
import IngredientsList from '../components/IngredientsList';
import RecipeDetailProvider from '../contexts/RecipeDetailProvider';
import RecipeHeader from '../components/RecipeHeader';
import InstructionsRecipe from '../components/InstructionsRecipe';
import VideoRecipe from '../components/VideoRecipe';

const DetailsPage = () => (
  <Container width="full" p="0">
    <RecipeDetailProvider>
      <RecipeHeader />
      <IngredientsList />
      <InstructionsRecipe />
      <VideoRecipe />
      <Recomendations />
      <ButtonStartRecipe />
    </RecipeDetailProvider>
  </Container>
);

export default DetailsPage;

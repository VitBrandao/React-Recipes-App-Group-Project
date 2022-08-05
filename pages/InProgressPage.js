import React from 'react';
import { Container } from '@chakra-ui/react';
import RecipeDetailProvider from '../contexts/RecipeDetailProvider';
import RecipeHeader from '../components/RecipeHeader';
import IngredientsListCheckbox from '../components/IngredientsListCheckbox';
import InstructionsRecipe from '../components/InstructionsRecipe';
import ButtonFinishRecipe from '../components/ButtonFinishRecipe';

const InProgressPage = () => (
  <Container maxW="full" p="0">
    <RecipeDetailProvider>
      <RecipeHeader />
      <IngredientsListCheckbox />
      <InstructionsRecipe />
      <ButtonFinishRecipe />
    </RecipeDetailProvider>
  </Container>
);

export default InProgressPage;

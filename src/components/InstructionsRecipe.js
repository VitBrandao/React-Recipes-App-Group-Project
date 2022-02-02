import { Heading, SkeletonText, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import RecipeDetailContext from '../contexts/RecipeDetailContext';

const InstructionsRecipe = () => {
  const { currentRecipe } = useContext(RecipeDetailContext);

  const instructions = currentRecipe?.strInstructions || '';

  if (instructions === '') {
    return (
      <>
        <Heading marginLeft="4">Modo de preparo:</Heading>
        <SkeletonText m="4" noOfLines="6" />
      </>
    );
  }

  return (
    <>
      <Heading marginLeft="4">Modo de preparo:</Heading>
      <Text m="4" textAlign="justify" data-testid="instructions">{ instructions }</Text>
    </>
  );
};

export default InstructionsRecipe;

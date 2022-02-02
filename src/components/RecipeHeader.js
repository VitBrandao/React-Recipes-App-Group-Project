import React, { useContext } from 'react';
import { Badge, Box, Flex, Heading, Image, Skeleton, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import RecipeDetailContext from '../contexts/RecipeDetailContext';
import ButtonShareRecipe from './ButtonShareRecipe';
import ButtonFavoriteRecipe from './ButtonFavoriteRecipe';

const RecipeHeader = () => {
  const { pathname } = useLocation();
  const { recipeObject: {
    image,
    name,
    category,
    alcoholicOrNot,
  } } = useContext(RecipeDetailContext);

  if (name === '') {
    return (
      <Box>
        <Skeleton width="full" height="35vh" />
        <Skeleton m="2"><Text fontSize="xl">Recipe Name</Text></Skeleton>
        <Badge
          marginLeft="2"
          colorScheme="blue"
          p="1"
        >
          <Skeleton>Badge</Skeleton>
        </Badge>
        { pathname.match(/drinks/) && (
          <Badge
            marginLeft="2"
            colorScheme="blue"
            p="1"
          >
            <Skeleton>Badge</Skeleton>
          </Badge>
        ) }
      </Box>
    );
  }

  return (
    <Box>
      <Image
        src={ image }
        data-testid="recipe-photo"
        height="35vh"
        width="full"
      />
      <Flex>
        <Heading m="2" flexGrow="1" data-testid="recipe-title">
          { name }
        </Heading>
        <Box>
          <ButtonShareRecipe />
          <ButtonFavoriteRecipe />
        </Box>
      </Flex>
      <Badge
        data-testid="recipe-category"
        marginLeft="2"
        colorScheme="blue"
        p="1"
      >
        { category }
      </Badge>
      { alcoholicOrNot.length > 0 && (
        <Badge
          colorScheme="blue"
          data-testid="recipe-category"
          marginLeft="2"
          p="1"
        >
          { alcoholicOrNot }
        </Badge>
      ) }
    </Box>
  );
};

export default RecipeHeader;

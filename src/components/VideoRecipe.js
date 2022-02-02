import { AspectRatio } from '@chakra-ui/react';
import React, { useContext } from 'react';
import RecipeDetailContext from '../contexts/RecipeDetailContext';

const VideoRecipe = () => {
  const { currentRecipe, recipeObject: { type } } = useContext(RecipeDetailContext);

  const { strYoutube } = currentRecipe;

  console.log(type);

  return (
    <div>
      {
        type === 'food' && strYoutube && (
          <AspectRatio m="4" maxW="full">
            <iframe
              title="Video da receita"
              data-testid="video"
              src={
                `https://www.youtube.com/embed/${strYoutube.split('v=')[1]}`
              }
              allowFullScreen
            />
          </AspectRatio>
        )
      }
    </div>
  );
};

export default VideoRecipe;

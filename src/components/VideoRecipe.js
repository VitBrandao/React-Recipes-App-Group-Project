import { AspectRatio, Image, Link } from '@chakra-ui/react';
import React, { useContext } from 'react';
import RecipeDetailContext from '../contexts/RecipeDetailContext';

const VideoRecipe = () => {
  const { currentRecipe, recipeObject: { type } } = useContext(RecipeDetailContext);

  const { strYoutube } = currentRecipe;

  return (
    <div>
      {
        type === 'food' && strYoutube && (
          <AspectRatio m="4" maxW="full">
            <Link
              href={ strYoutube }
              isExternal
            >
              <Image
                src={
                  `https://i.ytimg.com/vi_webp/${strYoutube.split('v=')[1]}/maxresdefault.webp`
                }
              />
            </Link>
          </AspectRatio>
        )
      }
    </div>
  );
};

export default VideoRecipe;

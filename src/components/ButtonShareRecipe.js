import React from 'react';
import { Button, useToast } from '@chakra-ui/react';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

const ButtonShareRecipe = () => {
  const toastLink = useToast({
    title: 'Link copied!',
    status: 'success',
    description: 'Link copiado com sucesso!',
    duration: 3000,
    isClosable: true,
  });

  const handleShareButton = () => {
    const link = global.location.href.split('/in-')[0];

    copy(link)
      .then(() => toastLink());
  };

  return (
    <Button m="2" data-testid="share-btn" onClick={ handleShareButton }>
      <img src={ shareIcon } alt="share recipe" />
    </Button>
  );
};

export default ButtonShareRecipe;

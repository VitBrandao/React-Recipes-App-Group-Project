import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from '@chakra-ui/react';

const Carousel = ({ children }) => (
  <Flex width="100%" overflowX="auto">
    {
      children.map((child, index) => (
        <Box width="50vw" m="2" key={ index }>{ child }</Box>
      ))
    }
  </Flex>
);

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Carousel;

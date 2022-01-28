import React from 'react';
import PropTypes from 'prop-types';

const MainProvider = ({ children }) => (
  <div>
    { children }
  </div>
);

RootProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainProvider;

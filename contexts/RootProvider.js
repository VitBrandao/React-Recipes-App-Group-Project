import React from 'react';
import PropTypes from 'prop-types';

const RootProvider = ({ children }) => (
  <div>
    { children }
  </div>
);

RootProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootProvider;

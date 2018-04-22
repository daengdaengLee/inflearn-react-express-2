import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../1-atoms/Box';

const Display = ({ number, backgroundColor }) => {
  return (
    <Box
      backgroundColor={backgroundColor} >
      {number}
    </Box>
  );
};

Display.propTypes = {
  number: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Display;
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
  ${props => props.display && css`
    display: ${props => props.display};
  `}
  ${props => props.backgroundColor && css`
    background-color: ${props => props.backgroundColor};
  `}
`;

const Box = ({ children, display, backgroundColor }) => {
  return (
    <Div
      display={display}
      backgroundColor={backgroundColor} >
      {children}
    </Div>
  );
};

Box.propTypes = {
  children: PropTypes.node,
  display: PropTypes.oneOf(['inline', 'block', 'inline-block']),
  backgroundColor: PropTypes.string,
};

export default Box;
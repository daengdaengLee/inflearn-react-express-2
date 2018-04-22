import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => {
    switch(props.justifyContent) {
      case 'end': {
        return 'flex-end';
      }
      case 'center': {
        return 'center';
      }
      case 'between': {
        return 'space-between';
      }
      case 'around': {
        return 'space-around';
      }
      default: {
        return 'flex-start';
      }
    }
  }};
  align-items: ${props => {
    switch(props.alignItems) {
      case 'start': {
        return 'flex-start';
      }
      case 'end': {
        return 'flex-end';
      }
      case 'center': {
        return 'center';
      }
      case 'baseline': {
        return 'baseline';
      }
      default: {
        return 'stretch';
      }
    }
  }};
`;

const Row = ({ children, justifyContent, alignItems }) => {
  return (
    <FlexRow
      justifyContent={justifyContent}
      alignItems={alignItems} >
      {children}
    </FlexRow>
  );
}

Row.propTypes = {
  children: PropTypes.node,
  justifyContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around']),
  alignItems: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
};

export default Row;
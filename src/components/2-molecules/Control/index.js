import React from 'react';
import PropTypes from 'prop-types';
import Row from '../../1-atoms/Row';
import Button from '../../1-atoms/Button';

function setRandomColor() {
  return [
    Math.floor((Math.random() * 55) + 200),
    Math.floor((Math.random() * 55) + 200),
    Math.floor((Math.random() * 55) + 200),
  ];
}

const Control = ({
  onClickIncrement,
  onClickDecrement,
  onClickRandomizeColor,
}) => {
  return (
    <Row>
      <Button
        onClick={onClickIncrement} >
        +
      </Button>
      <Button
        onClick={onClickDecrement} >
        -
      </Button>
      <Button
        onClick={() => onClickRandomizeColor(setRandomColor())} >
        random color
      </Button>
    </Row>
  );
};

Control.propTypes = {
  onClickIncrement: PropTypes.func.isRequired,
  onClickDecrement: PropTypes.func.isRequired,
  onClickRandomizeColor: PropTypes.func.isRequired,
};

export default Control;
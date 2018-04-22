import React from 'react';
import PropTypes from 'prop-types';
import Row from '../../1-atoms/Row';
import Button from '../../1-atoms/Button';

const Control = ({
  onClickIncreament,
  onClickDecrement,
  onClickRandomizeColor,
}) => {
  return (
    <Row>
      {
        [
          {
            id: 1,
            func: onClickIncreament,
            name: '+',
          },
          {
            id: 2,
            func: onClickDecrement,
            name: '-',
          },
          {
            id: 3,
            func: onClickRandomizeColor,
            name: 'random color',
          },
        ].map(button => (
          <Button
            key={button.id}
            onClick={button.func} >
            {button.name}
          </Button>
        ))
      }
    </Row>
  );
};

Control.propTypes = {
  onClickIncreament: PropTypes.func.isRequired,
  onClickDecrement: PropTypes.func.isRequired,
  onClickRandomizeColor: PropTypes.func.isRequired,
};

export default Control;
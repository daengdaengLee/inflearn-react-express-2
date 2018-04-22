import React from 'react';
import Row from '../../1-atoms/Row';
import Button from '../../1-atoms/Button';

const Control = ({ onClickIncreament, onClickDecrement, onClickRandomizeColor }) => {
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

export default Control;
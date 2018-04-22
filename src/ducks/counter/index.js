const INCREMENT = 'redux-example/counter/INCREMENT';
const DECREMENT = 'redux-example/counter/DECREMENT';

const initState = {
  number: 0,
};

export default function counter(state = initState, action) {
  switch(action.type) {
    case INCREMENT: {
      return {
        number: state.number + 1,
      };
    }
    case DECREMENT: {
      return {
        number: state.number - 1,
      };
    }
    default: {
      return state;
    }
  }
};

export function applyIncrement() {
  return {
    type: INCREMENT,
  };
};

export function applyDecrement() {
  return {
    type: DECREMENT,
  };
};
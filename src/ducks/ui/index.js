const CHANGE_BACKGROUND_COLOR = 'redux-example/ui/CHANGE_BACKGROUND_COLOR';

const initState = {
  backgroundColor: [ 255, 255, 255 ],
};

export default function ui(state = initState, action) {
  switch(action.type) {
    case CHANGE_BACKGROUND_COLOR: {
      return {
        backgroundColor: action.backgroundColor,
      };
    }
    default: {
      return state;
    }
  }
};

export function applyChangeBackgroundColor(backgroundColor) {
  return {
    type: CHANGE_BACKGROUND_COLOR,
    backgroundColor,
  };
};

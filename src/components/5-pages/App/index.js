import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../../ducks';
import RandomColorCounter from '../../4-templates/RandomColorCounter';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

class App extends Component {
  render() {
    return (
      <Provider
        store={store} >
        <RandomColorCounter />
      </Provider>
    );
  }
}

export default App;

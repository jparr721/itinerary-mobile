/**
 * Created by deonj on 9/22/2017.
 */
import React, { Component } from 'react';
import Router from './Router';
import { Provider } from 'react-redux';
import configureStore from '../configureStore'

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reduxModules';
import Router from './router';

export default class App extends Component {
  render() {
    const store = createStore(reducer);
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

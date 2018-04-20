import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './app/store';
import MainComponent from './app/components/Main';

const App = () => (
  <Provider store={store}>
    <MainComponent />
  </Provider>
);

AppRegistry.registerComponent('coyote', () => App);

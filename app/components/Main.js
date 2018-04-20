// @flow

import React from 'react';
import { StyleSheet, View } from 'react-native';
import GameField from './GameField';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default () => (
  <View style={styles.container}>
    <GameField turn={1} />
  </View>
);

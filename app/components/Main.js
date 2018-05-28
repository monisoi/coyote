// @flow

import React, { Component } from 'react';
import type { Node } from 'react';
import { StyleSheet, View } from 'react-native';
import GameField from './GameField';
import Controller from './Controller';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  gameField: {
    flex: 4,
  },
  controller: {
    flex: 1,
  },
});

export default (): Node => (
  <View style={styles.container}>
    <GameField style={styles.gameField}/>
    <Controller style={styles.controller}/>
  </View>
);

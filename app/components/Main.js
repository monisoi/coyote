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
});

export default (): Node => (
  <View style={styles.container}>
    <GameField />
    <Controller />
  </View>
);

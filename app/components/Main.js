// @flow

import React from 'react';
import type { Node } from 'react';
import { StyleSheet, View } from 'react-native';
import FeatureField from './FeatureField';
import GameField from './GameField';
import Controller from './Controller';
import Overlay from './Overlay';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEBD1',
  },
});

export default (): Node => (
  <View style={styles.container}>
    <FeatureField />
    <GameField />
    <Controller />
    <Overlay />
  </View>
);

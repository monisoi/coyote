// @flow

import React from 'react';
import type { Node } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import Player from './Player';

const styles = StyleSheet.create({
  players: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    justifyContent: 'space-around',
  },
});

const PLAYERS = [1, 2, 3, 4, 5, 6];

export const GameFieldComponent = (): Node => (
  <View style={styles.players}>{PLAYERS.map(n => <Player key={n} number={n} />)}</View>
);

export default connect()(GameFieldComponent);

//@flow

import React from 'react';
import type { Node } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import Player from './Player';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gameFeatures: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'powderblue',
  },
  players: {
    flex: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    justifyContent: 'space-around',
    backgroundColor: 'skyblue',
  }
});

const PLAYERS = [1, 2, 3, 4, 5, 6];

type Props = {
  turnOf: number,
  calledNumber: number,
  lifePoints: [number],
  answer: number,
  deck: [number],
};

export const GameField = ({ turnOf, calledNumber, lifePoints, answer, deck }: Props): Node => (
  <View style={styles.container}>
    <View style={styles.gameFeatures}>
      <Text>{`Turn of player ${turnOf}`}</Text>
      <Text>{`called number ${calledNumber}`}</Text>
      <Text>{`answer ${answer}`}</Text>
      <Text>{`deck length ${deck.length}`}</Text>
      {(() => lifePoints[0] <= 0 ? <Text>GAME OVER</Text> : null)()}
    </View>
    <View style={styles.players}>
      {PLAYERS.map(n => <Player key={n} number={n} />)}
    </View>
  </View>
);

const mapStateToProps = state => ({
  turnOf: state.game.turnOf,
  calledNumber: state.game.calledNumber,
  lifePoints: state.game.lifePoints,
  answer: state.card.answer,
  deck: state.card.deck,
});

export default connect(mapStateToProps)(GameField);

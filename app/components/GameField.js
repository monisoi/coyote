//@flow

import React from 'react';
import type { Node } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Badge } from 'react-native-elements';
import Player from './Player';

const styles = StyleSheet.create({
  container: {
    flex: 4,
  },
  gameFeatures: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 30,
    backgroundColor: 'powderblue',
  },
  leftMargin: {
    flex: 1,
  },
  deckWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deck: {
    width: 50,
    height: 60,
  },
  prevCallWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prevCall: {
    fontSize: 30,
  },
  players: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    justifyContent: 'space-around',
    backgroundColor: 'skyblue',
  },
});

const PLAYERS = [1, 2, 3, 4, 5, 6];

type Props = {
  turnOf: number,
  inputNumber: number,
  calledNumber: number,
  lifePoints: [number],
  answer: number,
  deck: [number],
};

const renderGameOver = lifePoint => (lifePoint <= 0 ? <Text>GAME OVER</Text> : null);

const renderInvalidNumberAlert = (turnOf, inputNumber, formerCalledNumber) => {
  if (turnOf !== 1) {
    return null;
  }
  if (!Number(inputNumber)) {
    return <Text>数字でコールしてください</Text>;
  }
  if (inputNumber <= formerCalledNumber) {
    return <Text>前のターンよりも大きな数字をコールしてください</Text>;
  }
  return null;
};

const renderDeck = numberOfCards => (
  <View style={styles.deckWrapper}>
    <View style={styles.deck}>
      <Icon name="documents" type="entypo" color="black" size={40} />
      <Badge value={numberOfCards} />
    </View>
  </View>
);

const renderPrevCall = calledNumber => (
  <View style={styles.prevCallWrapper}>
    <Text>前のコール</Text>
    <Text style={styles.prevCall}>{calledNumber}</Text>
  </View>
);

export const GameField = ({
  turnOf,
  inputNumber,
  calledNumber,
  lifePoints,
  deck,
}: Props): Node => (
  <View style={styles.container}>
    <View style={styles.gameFeatures}>
      <View style={styles.leftMargin} />
      {renderDeck(deck.length)}
      {renderPrevCall(calledNumber)}
      {renderGameOver(lifePoints[0])}
      {renderInvalidNumberAlert(turnOf, inputNumber, calledNumber)}
    </View>
    <View style={styles.players}>{PLAYERS.map(n => <Player key={n} number={n} />)}</View>
  </View>
);

const mapStateToProps = state => ({
  turnOf: state.game.turnOf,
  inputNumber: state.game.inputNumber,
  calledNumber: state.game.calledNumber,
  lifePoints: state.game.lifePoints,
  deck: state.card.deck,
});

export default connect(mapStateToProps)(GameField);

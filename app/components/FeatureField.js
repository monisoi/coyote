// @flow

import React from 'react';
import type { Node } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, Button, Text, View } from 'react-native';
import { Icon, Badge } from 'react-native-elements';
import { START_NEW_GAME } from '../actions/types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gameFeatures: {
    flex: 3,
    flexDirection: 'row',
    marginTop: 30,
  },
  startButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  alert: {
    flex: 1,
  },
  alertText: {
    color: 'red',
  },
});

type Props = {
  dispatch: Dispatch,
  turnOf: number,
  inputNumber: number,
  calledNumber: number,
  lifePoints: [number],
  deck: [number],
};

const renderGameOver = lifePoint =>
  lifePoint <= 0 ? <Text style={styles.alertText}>GAME OVER</Text> : null;

const renderInvalidNumberAlert = (turnOf, inputNumber, formerCalledNumber) => {
  if (turnOf !== 1) {
    return null;
  }
  if (!Number(inputNumber)) {
    return <Text style={styles.alertText}>数字でコールしてください</Text>;
  }
  if (inputNumber <= formerCalledNumber) {
    return <Text style={styles.alertText}>前のターンよりも大きな数字をコールしてください</Text>;
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

const renderStartButton = dispatch => (
  <View style={styles.startButton}>
    <Button onPress={() => dispatch({ type: START_NEW_GAME })} title="最初から" color="black" />
  </View>
);

export const GameFieldComponent = ({
  dispatch,
  turnOf,
  inputNumber,
  calledNumber,
  lifePoints,
  deck,
}: Props): Node => (
  <View style={styles.container}>
    <View style={styles.gameFeatures}>
      {renderStartButton(dispatch)}
      {renderDeck(deck.length)}
      {renderPrevCall(calledNumber)}
    </View>
    <View style={styles.alert}>
      {renderGameOver(lifePoints[0])}
      {renderInvalidNumberAlert(turnOf, inputNumber, calledNumber)}
    </View>
  </View>
);

const mapStateToProps = state => ({
  turnOf: state.game.turnOf,
  inputNumber: state.game.inputNumber,
  calledNumber: state.game.calledNumber,
  lifePoints: state.game.lifePoints,
  deck: state.card.deck,
});

export default connect(mapStateToProps)(GameFieldComponent);

// @flow

import React from 'react';
import type { Node } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Badge } from 'react-native-elements';
import { AppText } from '../shared/Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gameFeatures: {
    flex: 3,
    flexDirection: 'row',
    marginTop: 30,
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
  timer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 20,
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
  turnOf: number,
  inputNumber: number,
  calledNumber: number,
  lifePoints: [number],
  deck: [number],
};

const renderGameOver = lifePoint =>
  lifePoint <= 0 ? <AppText style={styles.alertText}>GAME OVER</AppText> : null;

const renderInvalidNumberAlert = (turnOf, inputNumber, formerCalledNumber) => {
  if (turnOf !== 1) {
    return null;
  }
  if (!Number(inputNumber)) {
    return <AppText style={styles.alertText}>数字でコールしてください</AppText>;
  }
  if (inputNumber <= formerCalledNumber) {
    return <AppText style={styles.alertText}>前のターンよりも大きな数字をコールしてください</AppText>;
  }
  return null;
};

const renderDeck = numberOfCards => (
  <View style={styles.deckWrapper}>
    <View style={styles.deck}>
      <Icon name="documents" type="entypo" color="#66605D" size={40} />
      <Badge value={numberOfCards} />
    </View>
  </View>
);

const renderTimer = () => (
  <View style={styles.timer}>
    <Icon name="timer" type="matelialicons" color="#66605D" size={30} />
    <AppText style={styles.timerText}>2:18</AppText>
  </View>
);

const renderPrevCall = calledNumber => (
  <View style={styles.prevCallWrapper}>
    <AppText>前のコール</AppText>
    <AppText style={styles.prevCall}>{calledNumber}</AppText>
  </View>
);

export const GameFieldComponent = ({
  turnOf,
  inputNumber,
  calledNumber,
  lifePoints,
  deck,
}: Props): Node => (
  <View style={styles.container}>
    <View style={styles.gameFeatures}>
      {renderDeck(deck.length)}
      {renderTimer()}
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

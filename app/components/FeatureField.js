// @flow

import React from 'react';
import type { Node } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Icon, Badge } from 'react-native-elements';
import { AppText } from '../custom/Text';
import Timer from './Timer';

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
  deckBadge: {
    backgroundColor: '#66605D',
  },
  timer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 10,
  },
  timerIcon: {
    flex: 1,
  },
  timerText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'left',
  },
  prevCallWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prevCall: {
    fontSize: 30,
  },
});

type Props = {
  turnOf: number,
  calledNumber: number,
  lifePoints: [number],
  deck: [number],
};

const renderDeck = numberOfCards => (
  <View style={styles.deckWrapper}>
    <View style={styles.deck}>
      <Icon name="documents" type="entypo" color="#66605D" size={40} />
      <Badge value={numberOfCards} containerStyle={styles.deckBadge} />
    </View>
  </View>
);

const renderDummyTimer = () => (
  <View style={styles.timer}>
    <Icon
      name="timer"
      type="matelialicons"
      color="#66605D"
      size={30}
      containerStyle={styles.timerIcon}
    />
    <AppText style={styles.timerText}>{' --:--'}</AppText>
  </View>
);

const renderPrevCall = calledNumber => (
  <View style={styles.prevCallWrapper}>
    <AppText>前のコール</AppText>
    <AppText style={styles.prevCall}>{calledNumber}</AppText>
  </View>
);

export const GameFieldComponent = ({ turnOf, calledNumber, lifePoints, deck }: Props): Node => (
  <View style={styles.container}>
    <View style={styles.gameFeatures}>
      {renderDeck(deck.length)}
      {turnOf === 1 ? renderDummyTimer() : <Timer />}
      {renderPrevCall(calledNumber)}
    </View>
  </View>
);

const mapStateToProps = state => ({
  turnOf: state.game.turnOf,
  calledNumber: state.game.calledNumber,
  lifePoints: state.game.lifePoints,
  deck: state.card.deck,
});

export default connect(mapStateToProps)(GameFieldComponent);

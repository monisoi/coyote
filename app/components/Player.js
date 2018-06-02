// @flow

import React from 'react';
import type { Node } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { NIGHT, DOUBLE, MAX0, UNKNOWN } from '../reducers/card'

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 150,
    backgroundColor: 'steelblue',
  },
});

type Props = {
  number: number,
  fieldCards: [number],
  lifePoints: [number],
};

const convertDisplay = card => {
  switch (card) {
    case NIGHT: {
      return '0(Night)';
    }
    case DOUBLE: {
      return 'x2';
    }
    case MAX0: {
      return 'MAX→0';
    }
    case UNKNOWN: {
      return '?';
    }
    default: {
      return card;
    }
  }
};

export const Player = ({ number, fieldCards, lifePoints }: Props): Node => (
  <View style={styles.container}>
    <Text>{`プレイヤー：${number}`}</Text>
    <Text>{`カード：${convertDisplay(fieldCards[number - 1])}`}</Text>
    <Text>{`ライフ：${lifePoints[number - 1]}`}</Text>
  </View>
);

const mapStateToProps = state => ({
  fieldCards: state.card.field,
  lifePoints: state.game.lifePoints,
});

export default connect(mapStateToProps)(Player);

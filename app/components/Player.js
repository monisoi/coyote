// @flow

import React from 'react';
import type { Node } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { NIGHT, DOUBLE, MAX0, UNKNOWN } from '../reducers/card';

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

const renderLifePoint = lifePoint => {
  if (lifePoint === 3) {
    return (
      <View>
        <Icon name="favorite" color="red" />
        <Icon name="favorite" color="red" />
      </View>
    );
  }
  if (lifePoint === 2) {
    return (
      <View>
        <Icon name="favorite" color="red" />
        <Icon name="favorite-border" color="red" />
      </View>
    );
  }
  return (
    <View>
      <Icon name="favorite-border" color="red" />
      <Icon name="favorite-border" color="red" />
    </View>
  );
};

export const Player = ({ number, fieldCards, lifePoints }: Props): Node => (
  <View style={styles.container}>
    <Text>{`プレイヤー：${number}`}</Text>
    <Text>{`カード：${convertDisplay(fieldCards[number - 1])}`}</Text>
    {renderLifePoint(lifePoints[number - 1])}
  </View>
);

const mapStateToProps = state => ({
  fieldCards: state.card.field,
  lifePoints: state.game.lifePoints,
});

export default connect(mapStateToProps)(Player);

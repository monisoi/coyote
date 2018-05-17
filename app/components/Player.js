// @flow

import React from 'react';
import type { Node } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

type Props = {
  number: number,
  fieldCards: [number],
  lifePoints: [number],
};

export const Player = ({ number, fieldCards, lifePoints }: Props): Node => (
  <View>
    <Text>{`Player: ${number}`}</Text>
    <Text>{`Card: ${fieldCards[number - 1]}`}</Text>
    <Text>{`Life: ${lifePoints[number - 1]}`}</Text>
  </View>
);

const mapStateToProps = state => ({
  fieldCards: state.card.field,
  lifePoints: state.game.lifePoints,
});

export default connect(mapStateToProps)(Player);

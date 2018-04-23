// @flow

import React from 'react';
import type { Node } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

type Props = {
  number: number,
  fieldCards: [number],
  playersLife: [number],
};

export const Player = ({ number, fieldCards, playersLife }: Props): Node => (
  <View>
    <Text>{`Player: ${number}`}</Text>
    <Text>{`Card: ${fieldCards[number - 1]}`}</Text>
    <Text>{`Life: ${playersLife[number - 1]}`}</Text>
  </View>
);

const mapStateToProps = state => ({
  fieldCards: state.card.field,
  playersLife: state.life.playersLife,
});

export default connect(mapStateToProps)(Player);

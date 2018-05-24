//@flow

import React from 'react';
import type { Node } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import Player from './Player';

const PLAYERS = [1, 2, 3, 4, 5, 6];

type Props = {
  turnOf: number,
  calledNumber: number,
  lifePoints: [number],
  answer: number,
  deck: [number],
};

export const GameField = ({ turnOf, calledNumber, lifePoints, answer, deck }: Props): Node => (
  <View>
    <Text>{`Turn of player ${turnOf}`}</Text>
    <Text>{`called number ${calledNumber}`}</Text>
    <Text>{`answer ${answer}`}</Text>
    <Text>{`deck lenght ${deck.length}`}</Text>
    {(() => lifePoints[0] <= 0 ? <Text>GAME OVER</Text> : null)()}
    {PLAYERS.map(n => <Player key={n} number={n} />)}
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

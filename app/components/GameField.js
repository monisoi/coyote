import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import Player from './Player';

const PLAYERS = [1, 2, 3, 4, 5, 6];

const GameField = ({ turn }) => (
  <View>
    <Text>{`Turn of player ${turn}`}</Text>
    {PLAYERS.map(n => <Player key={n} number={n} />)}
  </View>
);

const mapStateToProps = state => ({
  turn: state.game.turn,
});

export default connect(mapStateToProps)(GameField);

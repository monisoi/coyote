import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

const GameField = ({ turn }) => (
  <View>
    <Text>{`This is GameField turn: ${turn}`}</Text>
  </View>
);

const mapStateToProps = state => ({
  turn: state.game.turn,
});

export default connect(mapStateToProps)(GameField);

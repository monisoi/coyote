import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

const Player = ({ number, card, life }) => (
  <View>
    <Text>{`Player: ${number}`}</Text>
    <Text>{`Card: ${card[number - 1]}`}</Text>
    <Text>{`Life: ${life[number - 1]}`}</Text>
  </View>
);

// Player.propTypes = {
//   life: PropTypes.number.isRequired,
// };

const mapStateToProps = state => ({
  card: state.card.field,
  life: state.life.playersLife,
});

export default connect(mapStateToProps)(Player);

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import CoyoteButton from './CoyoteButton';

const Controller = ({}) => (
  <View>
    <Button title="Reset" color="#841584" />
    <CoyoteButton />
    <Button title="Next" color="#841584" />
  </View>
);

// const mapStateToProps = state => ({
//   turn: state.game.turn,
// });

export default connect()(Controller);

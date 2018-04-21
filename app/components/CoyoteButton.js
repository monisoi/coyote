import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';

const CoyoteButton = ({}) => (
  <View>
    <Button title="Coyote!" color="#841584" />
  </View>
);

// const mapStateToProps = state => ({
//   turn: state.game.turn,
// });

export default connect()(CoyoteButton);

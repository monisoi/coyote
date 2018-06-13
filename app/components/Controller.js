// @flow

import React from 'react';
import type { Node } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, View, Button } from 'react-native';
import CoyoteButton from './CoyoteButton';
import NumberCallButton from './NumberCallButton';
import { GO_TO_NEXT_TURN } from '../actions/types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftMargin: {
    flex: 1,
  },
  nextButton: {
    flex: 1,
    backgroundColor: 'steelblue',
  },
});

type Props = {
  dispatch: Dispatch,
  turnOf: number,
};

const renderActionButton = turnOf => (turnOf === 1 ? <NumberCallButton /> : <CoyoteButton />);

const renderNextButton = dispatch => (
  <View style={styles.nextButton}>
    <Button onPress={() => dispatch({ type: GO_TO_NEXT_TURN })} title="次へ" color="#123456" />
  </View>
);

export const ControllerComponent = ({ dispatch, turnOf }: Props): Node => (
  <View style={styles.container}>
    <View style={styles.leftMargin} />
    {renderActionButton(turnOf)}
    {renderNextButton(dispatch)}
  </View>
);

const mapStateToProps = state => ({
  turnOf: state.game.turnOf,
});

export default connect(mapStateToProps)(ControllerComponent);

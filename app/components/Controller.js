// @flow

import React from 'react';
import type { Node } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, View, Button } from 'react-native';
import CoyoteButton from './CoyoteButton';
import NumberCallButton from './NumberCallButton';
import { START_NEW_GAME, GO_TO_NEXT_TURN } from '../actions/types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  startButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

const renderStartButton = dispatch => (
  <View style={styles.startButton}>
    <Button onPress={() => dispatch({ type: START_NEW_GAME })} title="最初から" color="black" />
  </View>
);

const renderActionButton = turnOf => (turnOf === 1 ? <NumberCallButton /> : <CoyoteButton />);

const renderNextButton = dispatch => (
  <View style={styles.nextButton}>
    <Button onPress={() => dispatch({ type: GO_TO_NEXT_TURN })} title="次へ" color="#123456" />
  </View>
);

export const ControllerComponent = ({ dispatch, turnOf }: Props): Node => (
  <View style={styles.container}>
    {renderStartButton(dispatch)}
    {renderActionButton(turnOf)}
    {renderNextButton(dispatch)}
  </View>
);

const mapStateToProps = state => ({
  turnOf: state.game.turnOf,
});

export default connect(mapStateToProps)(ControllerComponent);

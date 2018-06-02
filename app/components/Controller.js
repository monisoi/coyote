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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

type Props = {
  dispatch: Dispatch,
  turnOf: number,
};

const renderActionButton = turnOf => turnOf === 1 ? <NumberCallButton /> : <CoyoteButton />;

export const Controller = ({ dispatch, turnOf }: Props): Node => (
  <View style={styles.container}>
    <Button onPress={() => dispatch({ type: START_NEW_GAME })} title="Reset" color="#123456" />
    {renderActionButton(turnOf)}
    <Button onPress={() => dispatch({ type: GO_TO_NEXT_TURN })} title="Next" color="#123456" />
  </View>
);

const mapStateToProps = state => ({
  turnOf: state.game.turnOf,
});

export default connect(mapStateToProps)(Controller);

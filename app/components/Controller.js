// @flow

import React from 'react';
import type { Node } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, View, Button } from 'react-native';
import CoyoteButton from './CoyoteButton';
import { START_NEW_GAME, GO_TO_NEXT_TURN } from '../actions/types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

type Props = {
  dispatch: Dispatch,
};

export const Controller = ({ dispatch }: Props): Node => (
  <View style={styles.container}>
    <Button onPress={() => dispatch({ type: START_NEW_GAME })} title="Reset" color="#123456" />
    <CoyoteButton />
    <Button onPress={() => dispatch({ type: GO_TO_NEXT_TURN })} title="Next" color="#123456" />
  </View>
);

export default connect()(Controller);

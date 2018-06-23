// @flow

import React from 'react';
import type { Node } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import CoyoteButton from './CoyoteButton';
import NumberCallButton from './NumberCallButton';
import { START_NEW_GAME, GO_TO_NEXT_TURN } from '../actions/types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  startButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
    backgroundColor: '#CCC3BA',
  },
  nextButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
    backgroundColor: '#CCC3BA',
  },
});

const NORMAL_COLOR = '#66605D';

type Props = {
  dispatch: Dispatch<any>,
  turnOf: number,
};

const renderStartButton = dispatch => (
  <TouchableOpacity style={styles.startButton} onPress={() => dispatch({ type: START_NEW_GAME })}>
    <Icon name="back" type="entypo" color={NORMAL_COLOR} size={40} />
  </TouchableOpacity>
);

const renderActionButton = turnOf => (turnOf === 1 ? <NumberCallButton /> : <CoyoteButton />);

const renderNextButton = dispatch => (
  <TouchableOpacity style={styles.nextButton} onPress={() => dispatch({ type: GO_TO_NEXT_TURN })}>
    <Icon name="controller-next" type="entypo" color={NORMAL_COLOR} size={40} />
  </TouchableOpacity>
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

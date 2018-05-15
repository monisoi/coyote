// @flow

import React from 'react';
import type { Node } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import CoyoteButton from './CoyoteButton';
import { START_NEW_GAME, GO_TO_NEXT_TURN } from '../actions/types';

type Props = {
  dispatch: Dispatch,
};

export const Controller = ({ dispatch }: Props): Node => (
  <View>
    <Button onPress={() => dispatch({ type: START_NEW_GAME })} title="Reset" color="#123456" />
    <CoyoteButton />
    <Button onPress={()=> dispatch({ type: GO_TO_NEXT_TURN })} title="Next" color="#123456" />
  </View>
);

export default connect()(Controller);

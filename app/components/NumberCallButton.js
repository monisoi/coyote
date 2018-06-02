// @flow

import React from 'react';
import type { Node } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { View, Button, TextInput } from 'react-native';
import { CALL_COYOTE, CHANGE_CALL_NUMBER, CALL_NUMBER } from '../actions/types';

type Props = {
  dispatch: Dispatch,
  inputNumber: number,
};

export const NumberCallButton = ({ dispatch, inputNumber }: Props): Node => (
  <View>
    <TextInput
      onChangeText={text => dispatch({ type: CHANGE_CALL_NUMBER, inputNumber: Number(text) })}
      value={String(inputNumber)}
      keyboardType="numeric"
    />
    <Button onPress={() => dispatch({ type: CALL_NUMBER, inputNumber })} title="Call" color="#123456" />
  </View>
);

const mapStateToProps = state => ({
  inputNumber: state.game.inputNumber,
});

export default connect(mapStateToProps)(NumberCallButton);

// @flow

import React from 'react';
import type { Node } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { CHANGE_CALL_NUMBER, CALL_NUMBER } from '../actions/types';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'lightslategray',
  },
  numberInputBoxWrapper: {},
  numberInputBox: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 40,
  },
  numberCallButtonWrapper: {},
});

type Props = {
  dispatch: Dispatch,
  inputNumber: number,
};

const renderNumberInputBox = (dispatch, inputNumber) => (
  <View style={styles.numberCallButtonWrapper}>
    <TextInput
      onChangeText={text => dispatch({ type: CHANGE_CALL_NUMBER, inputNumber: Number(text) })}
      value={String(inputNumber)}
      maxLength={3}
      keyboardType="numeric"
      style={styles.numberInputBox}
    />
  </View>
);

const renderNumberCallButton = (dispatch, inputNumber) => (
  <View style={styles.numberCallButtonWrapper}>
    <Button
      onPress={() => dispatch({ type: CALL_NUMBER, inputNumber })}
      title="コール"
      color="#123456"
    />
  </View>
);

export const NumberCallButtonComponent = ({ dispatch, inputNumber }: Props): Node => (
  <View style={styles.container}>
    {renderNumberInputBox(dispatch, inputNumber)}
    {renderNumberCallButton(dispatch, inputNumber)}
  </View>
);

const mapStateToProps = state => ({
  inputNumber: state.game.inputNumber,
});

export default connect(mapStateToProps)(NumberCallButtonComponent);

// @flow

import React from 'react';
import type { Node } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { CHANGE_CALL_NUMBER, CALL_NUMBER } from '../actions/types';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'space-around',
    alignItems: 'center',
    height: '70%',
  },
  inputWrapper: {
    flex: 1,
    height: '30%',
    width: '40%',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    textAlign: 'center',
  },
  buttonWrapper: {
    flex: 1,
    height: '40%',
  },
  button: {
    width: '100%',
    backgroundColor: '#F58F71',
    borderRadius: 5,
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

type Props = {
  dispatch: Dispatch<any>,
  inputNumber: number,
};

const renderNumberInputBox = (dispatch, inputNumber) => (
  <View style={styles.inputWrapper}>
    <Input
      onChangeText={text => dispatch({ type: CHANGE_CALL_NUMBER, inputNumber: Number(text) })}
      value={String(inputNumber)}
      maxLength={3}
      keyboardType="numeric"
      inputStyle={styles.input}
      underlineColorAndroid='rgba(0,0,0,0)'
    />
  </View>
);

const renderNumberCallButton = (dispatch, inputNumber) => (
  <View style={styles.buttonWrapper}>
    <Button
      onPress={() => dispatch({ type: CALL_NUMBER, inputNumber })}
      title="コール!"
      buttonStyle={styles.button}
      titleStyle={styles.buttonTitle}
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

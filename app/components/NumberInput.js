// @flow

import React from 'react';
import type { Node } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { AppText } from '../custom/Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  margin: {
    flex: 1,
  },
  contents: {
    flex: 1,
    alignItems: 'center',
  },
  numberWrapper: {
    flex: 3,
  },
  inputNumber: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
  },
  invalidInput: {
    color: 'red',
  },
  alert: {
    flex: 1,
  },
  alertText: {
    color: 'white',
  },
});

type Props = {
  dispatch: Dispatch<any>,
  inputNumber: number,
  calledNumber: number,
};

const renderInvalidNumberAlert = (inputNumber, formerCalledNumber) => {
  if (!Number(inputNumber)) {
    return <AppText style={styles.alertText}>数字でコールしてください</AppText>;
  }
  if (inputNumber <= formerCalledNumber) {
    return (
      <AppText style={styles.alertText}>前のターンよりも大きな数字をコールしてください</AppText>
    );
  }
  return null;
};

const renderInputNumber = (inputNumber, formerCalledNumber) => {
  if (!Number(inputNumber) || inputNumber <= formerCalledNumber) {
    return (
      <AppText style={StyleSheet.flatten([styles.inputNumber, styles.invalidInput])}>
        {String(inputNumber)}
      </AppText>
    );
  }
  return <AppText style={styles.inputNumber}>{String(inputNumber)}</AppText>;
};

export const NumberInputComponent = ({ dispatch, inputNumber, calledNumber }: Props): Node => (
  <View>
    <View style={styles.margin} />
    <View style={styles.contents}>
      <View style={styles.alert}>{renderInvalidNumberAlert(inputNumber, calledNumber)}</View>
      <View style={styles.numberWrapper}>{renderInputNumber(inputNumber, calledNumber)}</View>
    </View>
    <View style={styles.margin} />
  </View>
);

const mapStateToProps = state => ({
  inputNumber: state.game.inputNumber,
  calledNumber: state.game.calledNumber,
});

export default connect(mapStateToProps)(NumberInputComponent);

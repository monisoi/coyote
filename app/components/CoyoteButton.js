// @flow

import React from 'react';
import type { Node } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { CALL_COYOTE } from '../actions/types';

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 2,
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: '100%',
    width: '100%',
    backgroundColor: '#F58F71',
    borderRadius: 8,
  },
  buttonTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  }
});

type Props = {
  dispatch: Dispatch<any>,
  answer: number,
};

export const CoyoteButtonComponent = ({ dispatch, answer }: Props): Node => (
  <View style={styles.buttonWrapper}>
    <Button
      onPress={() => dispatch({ type: CALL_COYOTE, answer })}
      title="コヨーテ！"
      buttonStyle={styles.button}
      titleStyle={styles.buttonTitle}
    />
  </View>
);

const mapStateToProps = state => ({
  answer: state.card.answer,
});

export default connect(mapStateToProps)(CoyoteButtonComponent);

// @flow

import React from 'react';
import type { Node } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, View, Button } from 'react-native';
import { CALL_COYOTE } from '../actions/types';

const styles = StyleSheet.create({
  coyoteButton: {
    flex: 1,
  },
});

type Props = {
  dispatch: Dispatch,
  answer: number,
};

export const CoyoteButton = ({ dispatch, answer }: Props): Node => (
  <View style={styles.coyoteButton}>
    <Button
      onPress={() => dispatch({ type: CALL_COYOTE, answer })}
      title="コヨーテ！"
      color="#123456"
    />
  </View>
);

const mapStateToProps = state => ({
  answer: state.card.answer,
});

export default connect(mapStateToProps)(CoyoteButton);

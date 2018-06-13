// @flow

import React from 'react';
import type { Node } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { CALL_COYOTE } from '../actions/types';

const styles = StyleSheet.create({
  coyoteButton: {
    flex: 2,
    backgroundColor: 'lightslategray',
  },
});

type Props = {
  dispatch: Dispatch,
  answer: number,
};

export const CoyoteButtonComponent = ({ dispatch, answer }: Props): Node => (
  <View style={styles.coyoteButton}>
    <Button
      large
      iconRight={{ name: 'priority-high' }}
      onPress={() => dispatch({ type: CALL_COYOTE, answer })}
      title="コヨーテ"
      backgroundColor="powderblue"
    />
  </View>
);

const mapStateToProps = state => ({
  answer: state.card.answer,
});

export default connect(mapStateToProps)(CoyoteButtonComponent);

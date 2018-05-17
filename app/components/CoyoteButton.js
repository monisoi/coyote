// @flow

import React from 'react';
import type { Node } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import { CALL_COYOTE } from '../actions/types';

type Props = {
  dispatch: Dispatch,
  answer: number,
};

export const CoyoteButton = ({ dispatch, answer }: Props): Node => (
  <View>
    <Button
      onPress={() => dispatch({ type: CALL_COYOTE, answer })}
      title="Coyote!!"
      color="#123456"
    />
  </View>
);

const mapStateToProps = state => ({
  answer: state.card.answer,
});

export default connect(mapStateToProps)(CoyoteButton);

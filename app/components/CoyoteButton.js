// @flow

import React from 'react';
import type { Node } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

export const CoyoteButton = (): Node => (
  <View>
    <Text>Coyote!</Text>
  </View>
);

export default connect()(CoyoteButton);

// @flow

import React from 'react';
import type { Node } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import CoyoteButton from './CoyoteButton';

export const Controller = (): Node => (
  <View>
    <Text>Reset</Text>
    <CoyoteButton />
    <Text>Next</Text>
  </View>
);

export default connect()(Controller);

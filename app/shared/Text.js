// @flow

import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appText: {
    fontSize: 16,
    color: '#66605D',
  },
});

export class AppText extends Component<any> {
  render() {
    return (
      <Text {...this.props} style={[styles.appText, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}

export const dummy = () => {}; // TODO: Remove this. This is just for avoiding eslint error.

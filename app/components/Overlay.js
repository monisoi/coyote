// @flow

import React from 'react';
import type { Node } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { Overlay, Button } from 'react-native-elements';
import { START_NEW_GAME } from '../actions/types';

const styles = StyleSheet.create({
  gameOver: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    width: '100%',
    backgroundColor: '#F58F71',
    borderRadius: 5,
  },
  buttonTitle: {
    color: 'white',
  },
});

type Props = {
  dispatch: Dispatch<any>,
  isGameOver: boolean,
};

export const OverlayComponent = ({ dispatch, isGameOver }: Props): Node => (
  <Overlay
    isVisible={isGameOver}
    windowBackgroundColor="rgba(0, 0, 0, .5)"
    overlayBackgroundColor="rgba(255, 255, 255, 0)"
    width="auto"
    height="auto"
  >
    <View>
      <Text style={styles.gameOver}>GAME OVER!</Text>
      <Button
        onPress={() => dispatch({ type: START_NEW_GAME })}
        title="もう１回"
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
      />
    </View>
  </Overlay>
);

const mapStateToProps = state => ({
  isGameOver: state.game.isGameOver,
});

export default connect(mapStateToProps)(OverlayComponent);

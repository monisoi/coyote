// @flow

import React from 'react';
import type { Node } from 'react';
import { connect } from 'react-redux';
import { Overlay } from 'react-native-elements';
import GameOver from './GameOver';
import NumberInput from './NumberInput';

type Props = {
  isGameOver: boolean,
  displayNumberInput: boolean,
};

const displayContent = (isGameOver, displayNumberInput) => {
  if (isGameOver) return <GameOver />;
  if (displayNumberInput) return <NumberInput />;
  return null;
};

export const OverlayComponent = ({ isGameOver, displayNumberInput }: Props): Node => (
  <Overlay
    isVisible={isGameOver || displayNumberInput}
    windowBackgroundColor="rgba(0, 0, 0, .5)"
    overlayBackgroundColor="rgba(255, 255, 255, 0)"
    width="auto"
    height="auto"
  >
    {displayContent(isGameOver, displayNumberInput)}
  </Overlay>
);

const mapStateToProps = state => ({
  isGameOver: state.game.isGameOver,
  displayNumberInput: state.display.displayNumberInput,
});

export default connect(mapStateToProps)(OverlayComponent);

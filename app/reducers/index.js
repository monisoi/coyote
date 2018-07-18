import { combineReducers } from 'redux';
import game from './game';
import card from './card';
import display from './display';
import timer from './timer';

const reducers = combineReducers({
  game,
  card,
  display,
  timer,
});

export default reducers;

import { combineReducers } from 'redux';
import game from './game';
import card from './card';
import display from './display';

const reducers = combineReducers({
  game,
  card,
  display,
});

export default reducers;

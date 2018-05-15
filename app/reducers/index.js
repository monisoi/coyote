import { combineReducers } from 'redux';
import game from './game';
import card from './card';

const reducers = combineReducers({
  game,
  card,
});

export default reducers;

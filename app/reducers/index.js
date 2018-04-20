import { combineReducers } from 'redux';
import game from './game';
import life from './life';
import card from './card';

const reducers = combineReducers({
  game,
  life,
  card,
});

export default reducers;

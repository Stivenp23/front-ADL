import {AppActions} from '../actions';
import {combineReducers} from '@ngrx/store';

function res(state = '0', {type, payload}) {
  switch (type) {
    case AppActions.SET_RES:
      return payload;
    default:
      return state;
  }
}

function operation(state = '', {type, payload}) {
  switch (type) {
    case AppActions.GET_OPERATION:
      return payload;
    default:
      return state;
  }
}

export const calculator = combineReducers({
  res,
  operation
});

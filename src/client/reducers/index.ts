import { combineReducers } from 'redux';

const authentication = (
  state = {
    isLogged: false
  }
) => {
  return state;
};

export type State = {
  authentication: typeof authentication;
};

export const rootReducer = combineReducers({ authentication });

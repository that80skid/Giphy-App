import { Action, createReducer, on } from '@ngrx/store';
// import { setUser, clearUser } from './actions/user.actions';
import * as userActions from '../actions/user.actions';

export interface UserState {
  username: string;
  id: number;
}

 // Setting an initial state
export const initialUserState: UserState = {
  username: null,
  id: null
}

// Creating the actual reducer and telling what to do when different `actions` occur
const reducer = createReducer(initialUserState,
  on(userActions.setUser, (state, {username, id}) => ({...state, username: username, id: id})),
  on(userActions.clearUser, (state) => ({...initialUserState})),
);

export function userReducer(state: UserState, action: Action) {
  return reducer(state, action);
}




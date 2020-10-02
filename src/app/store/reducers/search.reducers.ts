import { Action, createReducer, on } from '@ngrx/store';
import { Gif } from 'src/app/interface/gif.interface';
import * as SearchActions from '../actions/search.actions';

export interface SearchState {
  search: Array<Gif>
}

 // Setting an initial state
export const initialSearchState: SearchState = {
  search: []
};

SearchActions

// Creating the actual reducer and telling what to do when different `actions` occur
const reducer = createReducer(initialSearchState,
  on(SearchActions.setSearch, (state, {results}) => ({...state, search: [...results]}) ),
  on(SearchActions.clearSearch, (state) => ({...initialSearchState})),
);

export function searchReducer(state: SearchState, action: Action) {
  return reducer(state, action);
}

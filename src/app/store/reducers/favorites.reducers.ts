import { Action, createReducer, on } from '@ngrx/store';
import { Gif } from 'src/app/interface/gif.interface';
import * as FavoritesActions from '../actions/favorites.actions';

export interface FavoritesState {
  favorites: Array<Gif>
}

 // Setting an initial state
export const initialFavoritesState: FavoritesState = {
  favorites: []
};

FavoritesActions

// Creating the actual reducer and telling what to do when different `actions` occur
const reducer = createReducer(initialFavoritesState,
  on(FavoritesActions.addFavorite, (state, {newFavorite}) => ({...state, favorites: [...state.favorites, newFavorite]}) ),
  on(FavoritesActions.removeFavorite, (state, {id}) => ({...state, favorites: state.favorites.filter(gif => gif.id !== id)})),
  on(FavoritesActions.clearFavorites, (state) => ({...initialFavoritesState}))
);

export function favoritesReducer(state: FavoritesState, action: Action) {
  return reducer(state, action)

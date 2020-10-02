import * as Reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface RootState {
  user: Reducers.UserState;
  favorites: Reducers.FavoritesState;
  search: Reducers.SearchState;
}

export const reducers: ActionReducerMap<RootState> = {
  user: Reducers.userReducer,
  favorites: Reducers.favoritesReducer,
  search: Reducers.searchReducer,
}

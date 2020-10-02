import { createAction, props } from '@ngrx/store';
import { Gif } from 'src/app/interface/gif.interface';

export const addFavorite = createAction('[FAVORITES STATE] Add Favorite', props<{newFavorite: Gif}>());
export const removeFavorite = createAction('[FAVORITES STATE] Remove Favorite' props<{id: string}>());
export const clearFavorites = createAction('[FAVORITES STATE] Clear Favorites');

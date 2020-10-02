import { createAction, props } from '@ngrx/store';
import { Gif } from 'src/app/interface/gif.interface';

export const setSearch = createAction('[SEARCH STATE] Set Search', props<{results: Gif[]}>());
export const clearSearch = createAction('[SEARCH STATE] Remove Search');


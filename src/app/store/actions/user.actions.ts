import { createAction, props } from '@ngrx/store';
export const setUser = createAction('[ USER STATE ] Set User', props<{username: string}>());
export const clearUser = createAction('[ USER STATE ] Clear User');

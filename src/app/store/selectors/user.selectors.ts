import { RootState } from '..';

export const getUserName = (state: RootState) => state.user.username;
export const getUserId = (state: RootState) => state.user.id;
export const getUserState = (state: RootState) => state.user;

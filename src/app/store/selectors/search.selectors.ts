import { RootState } from '..';

export const getUsername = (state: RootState) => state.user.username;
export const getUserState = (state: RootState) => state.user;


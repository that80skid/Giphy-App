import { RootState } from '..';

export const getUserName = (state: RootState) => state.user.username;
export const getUserState = (state: RootState) => state.user;

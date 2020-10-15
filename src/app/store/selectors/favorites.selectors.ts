import { RootState } from '..';

export const getAllFavorites = (state: RootState) => state.favorites.favorites;
export const getFavoriteState = (state: RootState) => state.favorites;

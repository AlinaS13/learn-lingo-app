import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites(state, { payload }) {
      state.favorites.push(payload);
    },
    removeFavorites(state, { payload }) {
      state.favorites = state.favorites.filter((el) => el !== payload);
    },
  },
});

export const { addFavorites, removeFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;

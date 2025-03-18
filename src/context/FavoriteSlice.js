import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

export const FavoriteSlice = createSlice({
  name: "favorite",
  initialState: initialState,
  reducers: (create) => ({
    addToFavorite: create.reducer((state, action) => {
      console.log("Current favorites:", state.favorites);
      console.log("New payload:", action.payload);
      if (state.favorites.some((item) => item.id === action.payload.id)) {
        return;
      }
      state.favorites = [...state.favorites, action.payload];
    }),
    deleteFavorite: create.reducer((state, action) => {
      if (!state.favorites.length) return;
      const newItems = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );
      state.favorites = newItems;
    }),
  }),
  selectors: {
    selectFavorites: (state) => state.favorites,
  },
});

export const { addToFavorite, deleteFavorite } = FavoriteSlice.actions;
export const { selectFavorites } = FavoriteSlice.selectors;

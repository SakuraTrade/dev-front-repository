import { createAppSlice } from "../app/createAppSlice";

const initialState = {
  favorites: [],
};

export const FavoriteSlice = createAppSlice({
  name: "favorite",
  initialState,
  reducers: (create) => ({
    addToFavorite: create.reducer((state, action) => {
      state.favorites = state.favorites || []; // 기본값 보장
      if (state.favorites.some((item) => item.id === action.payload.id)) {
        return;
      }
      state.favorites.push(action.payload);
    }),
    deleteFavorite: create.reducer((state, action) => {
      if (!state.favorites.length) return;
      const newItems = state.favorites.filter(
        (item) => item.id !== action.payload
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

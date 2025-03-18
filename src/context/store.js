import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./loginSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { FavoriteSlice } from "./FavoriteSlice";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineSlices(loginSlice, FavoriteSlice);
const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

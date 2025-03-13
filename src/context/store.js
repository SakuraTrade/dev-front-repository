import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./loginSlice";

const rootReducer = combineSlices(loginSlice);

export const store = configureStore({
  reducer: rootReducer,
});

// export type AppStore = typeof store;
// export type RootState = ReturnType<typeof rootReducer>;
// export type AppDispatch = AppStore["dispatch"];

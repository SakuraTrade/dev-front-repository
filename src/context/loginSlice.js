import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  status: "logout",
};

export const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: (create) => ({
    login: create.reducer((state, action) => {
      console.log("Current login:", state.user);
      console.log("New payload:", action.payload);
      state.user = action.payload;
      state.status = "login";
    }),
    logout: create.reducer((state) => {
      console.log("Current login:", state.user);

      state.user = null;
      state.status = "logout";
    }),
  }),
  selectors: {
    selectId: (state) => state.user?.id ?? "",
    selectUsername: (state) => state.user?.username ?? "",
    selectStatus: (state) => state.status,
  },
});

export const { login, logout } = loginSlice.actions;
export const { selectId, selectUsername, selectStatus } = loginSlice.selectors;

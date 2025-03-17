import { createAppSlice } from "../app/createAppSlice";

const initialState = {
  user: null,
  status: "logout",
};

export const loginSlice = createAppSlice({
  name: "login",
  initialState,
  reducers: (create) => ({
    login: create.reducer((state, action) => {
      state.user = action.payload;
      state.status = "login";
    }),
    logout: create.reducer((state) => {
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

import { createSlice } from "@reduxjs/toolkit";

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState: {
    repositories: [],
  },
  reducers: {
    setRepositories: (state, action) => {
      state.repositories = action.payload.repositories;
    },
  },
});

export const { setRepositories } = repositoriesSlice.actions;
export default repositoriesSlice.reducer;

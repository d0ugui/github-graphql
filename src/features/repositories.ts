import { createSlice } from "@reduxjs/toolkit";

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState: {
    data: [],
  },
  reducers: {
    setRepositories: (state, action) => {
      state.data = action.payload.repositories;
    },
  },
});

export const { setRepositories } = repositoriesSlice.actions;
export default repositoriesSlice.reducer;

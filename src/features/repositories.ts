import { createSlice } from "@reduxjs/toolkit";
import { RepositoryProps } from "../interfaces/Repository";

interface RepositoriesState {
  data: [] | RepositoryProps[];
}

const initialState: RepositoriesState = {
  data: [],
};

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    setRepositories: (state, action) => {
      state.data = action.payload.repositories;
    },
  },
});

export const { setRepositories } = repositoriesSlice.actions;
export default repositoriesSlice.reducer;

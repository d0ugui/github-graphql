import { createSlice } from "@reduxjs/toolkit";
import { RepositoryProps } from "../interfaces/Repository";

interface RepositoriesState {
  data: [] | RepositoryProps[];
  selectedRepository: RepositoryProps | null;
}

const initialState: RepositoriesState = {
  data: [],
  selectedRepository: null,
};

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    setRepositories: (state, action) => {
      state.data = action.payload.repositories;
    },
    setSelectedRepository: (state, action) => {
      state.selectedRepository = action.payload.data;
    },
    resetSelectedRepository: (state) => {
      state.selectedRepository = null;
    },
  },
});

export const {
  setRepositories,
  setSelectedRepository,
  resetSelectedRepository,
} = repositoriesSlice.actions;
export default repositoriesSlice.reducer;

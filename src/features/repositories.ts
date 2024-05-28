import { createSlice } from "@reduxjs/toolkit";
import { RepositoryProps } from "../interfaces/Repository";

interface RepositoriesState {
  data: [] | RepositoryProps[];
  selectedRepository: RepositoryProps | null;
  loadingRepositories: boolean;
}

const initialState: RepositoriesState = {
  data: [],
  selectedRepository: null,
  loadingRepositories: false,
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
    setLoadingRepositories: (state, action) => {
      state.loadingRepositories = action.payload.loading;
    },
  },
});

export const {
  setRepositories,
  setSelectedRepository,
  resetSelectedRepository,
  setLoadingRepositories,
} = repositoriesSlice.actions;
export default repositoriesSlice.reducer;

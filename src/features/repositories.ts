import { createSlice } from "@reduxjs/toolkit";
import { RepositoryProps } from "../interfaces/Repository";

interface RepositoriesState {
  data: [] | RepositoryProps[];
  selectedRepository: RepositoryProps | null;
  loadingRepositories: boolean;
  pageInfo: {
    endCursor: string;
    startCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  search: string;
}

const initialState: RepositoriesState = {
  data: [],
  selectedRepository: null,
  loadingRepositories: false,
  pageInfo: {
    endCursor: "",
    startCursor: "",
    hasNextPage: false,
    hasPreviousPage: false,
  },
  search: "",
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
    setPageInfo: (state, action) => {
      state.pageInfo = action.payload.pageInfo;
    },
    setSearchFilter: (state, action) => {
      state.search = action.payload.search;
    },
  },
});

export const {
  setRepositories,
  setSelectedRepository,
  resetSelectedRepository,
  setLoadingRepositories,
  setPageInfo,
  setSearchFilter,
} = repositoriesSlice.actions;
export default repositoriesSlice.reducer;

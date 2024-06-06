import { RepositoryProps } from "../../../interfaces/Repository";

export interface RepositoriesState {
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
